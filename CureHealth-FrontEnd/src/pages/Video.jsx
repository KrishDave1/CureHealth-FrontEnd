import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useGlobalContext } from "../context";

const Video = () => {
  const { roomId } = useParams();
  const { userId } = useGlobalContext();
  const [username1, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/data/patients/?id=${userId}`
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    };

    const loadData = async () => {
      const result = await fetchData();
      if (result) {
        setUsername(result.patient_As_NewUser[0].username);
      }
    };

    loadData();
  }, [userId]);

  const myMeeting = async (element) => {
    const appID = 2128981886;
    const serverSecret = "672069aa6f48024ee59354bdfa721404";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      username1
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:5173/video/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};

export default Video;
