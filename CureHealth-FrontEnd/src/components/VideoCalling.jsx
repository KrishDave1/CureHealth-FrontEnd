import { useState, useEffect } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";

const VideoCalling = () => {
  const APP_ID = "141368df24c440a4bba7a746fecd703a";
  const [localTracks, setLocalTracks] = useState([]);
  const [remoteUsers, setRemoteUsers] = useState({});
  const [UID, setUID] = useState(Number(sessionStorage.getItem("UID")));
  const [TOKEN] = useState(sessionStorage.getItem("token"));
  const [NAME] = useState(sessionStorage.getItem("name"));
  const [CHANNEL] = useState(sessionStorage.getItem("room"));
  
  const client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
  });

  const joinAndDisplayLocalStream = async () => {
    client.on("user-published", handleUserJoined);
    client.on("user-left", handleUserLeft);

    try {
      const newUID = await client.join(APP_ID, CHANNEL, TOKEN, UID);
      setUID(newUID);
      console.log("newUID", newUID);
    } catch (error) {
      console.log(error);
    }
    const tracks = await AgoraRTC.createMicrophoneAndCameraTracks();
    setLocalTracks(tracks);

    const member = await createMember();
    const player = (
      <div className="video-container" id={`user-container-${UID}`}>
        <div className="video-player" id={`user-${UID}`}></div>
        <div className="username-wrapper">
          <span className="user-name">{member.name}</span>
        </div>
      </div>
    );

    setVideoStreams((prevStreams) => [...prevStreams, player]);
    tracks[1].play(`user-${UID}`);
    await client.publish([tracks[0], tracks[1]]);
  };

  const handleUserJoined = async (user, mediaType) => {
    setRemoteUsers((prevRemoteUsers) => ({
      ...prevRemoteUsers,
      [user.uid]: user,
    }));

    await client.subscribe(user, mediaType);

    if (mediaType === "video") {
      setVideoStreams((prevStreams) => {
        const updatedStreams = prevStreams.filter(
          (stream) => !stream.includes(`user-container-${user.uid}`));
        console.log("updatedStreams", updatedStreams);
        const member = getMember(user);
        const player = (
          <div className="video-container" id={`user-container-${user.uid}`}>
            <div className="video-player" id={`user-${user.uid}`}></div>
            <div className="username-wrapper">
              <span className="user-name">{member.name}</span>
            </div>
          </div>
        );
        return [...updatedStreams, player];
      });
      user.videoTrack.play(`user-${user.uid}`);
    }

    if (mediaType === "audio") {
      user.audioTrack.play();
    }
  };

  const handleUserLeft = async (user) => {
    setRemoteUsers((prevRemoteUsers) => {
      const newRemoteUsers = { ...prevRemoteUsers };
      delete newRemoteUsers[user.uid];
      return newRemoteUsers;
    });

    setVideoStreams((prevStreams) =>
      prevStreams.filter((stream) => !stream.includes(`user-container-${user.uid}`))
    );
  };

  const leaveAndRemoveLocalStream = async () => {
    for (let i = 0; i < localTracks.length; i++) {
      localTracks[i].stop();
      localTracks[i].close();
    }

    await client.leave();
    deleteMember();
    window.open("/", "_self");
  };

  const toggleCamera = async (e) => {
    console.log("TOGGLE CAMERA TRIGGERED");
    if (localTracks[1].muted) {
      await localTracks[1].setMuted(false);
      e.target.style.backgroundColor = "#fff";
    } else {
      await localTracks[1].setMuted(true);
      e.target.style.backgroundColor = "rgb(255, 80, 80, 1)";
    }
  };

  const toggleMic = async (e) => {
    console.log("TOGGLE MIC TRIGGERED");
    if (localTracks[0].muted) {
      await localTracks[0].setMuted(false);
      e.target.style.backgroundColor = "#fff";
    } else {
      await localTracks[0].setMuted(true);
      e.target.style.backgroundColor = "rgb(255, 80, 80, 1)";
    }
  };

  const createMember = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/create_member/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name : NAME,
          UID: UID,
          room_name: CHANNEL,
        }),
      });
      const member = await response.json();
      console.log(member);
      return member;
    } catch (error) {
      console.error("Error creating member:", error);
    }
  };

  const getMember = async (user) => {
    const response = await fetch(
      `http://127.0.0.1:8000/get_member/?UID=${user.uid}&room_name=${CHANNEL}`
    );
    const member = await response.json();
    return member;
  };

  const deleteMember = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/delete_member/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: NAME, room_name: CHANNEL, UID: UID }),
      });
      const member = await response.json();
      return member;
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };

  const cleanup = () => {
    deleteMember();
  };

  useEffect(() => {
    window.addEventListener("beforeunload", cleanup);

    joinAndDisplayLocalStream();

    return () => {
      window.removeEventListener("beforeunload", cleanup);
    };
  }, []);

  const [videoStreams, setVideoStreams] = useState([]);

  return (
    <main>
      <section id='room-name-wrapper'>
        <p>
          Room Name: <span id='room-name'>{CHANNEL}</span>
        </p>
      </section>

      <section id='video-streams' key={UID}>
        { videoStreams }
      </section>

      <section id='controls-wrapper'>
        <div className='icon-wrapper'>
          <img
            className='control-icon'
            id='mic-btn'
            src='../../images/microphone.svg'
            onClick={toggleMic}
          />
        </div>

        <div className='icon-wrapper'>
          <img
            className='control-icon'
            id='camera-btn'
            src='../../images/video.svg'
            alt="Video"
            onClick={toggleCamera}
          />
        </div>

        <div className='icon-wrapper'>
          <img
            className='control-icon'
            id='leave-btn'
            alt="Leave"
            src='images/leave.svg'
            onClick={leaveAndRemoveLocalStream}
          />
        </div>
      </section>
    </main>
  );
};

export default VideoCalling;