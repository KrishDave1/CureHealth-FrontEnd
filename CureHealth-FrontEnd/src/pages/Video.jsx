import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useGlobalContext } from "../context";

const Video = () => {
  const { username } = useGlobalContext();
  const { roomId } = useParams();
  const [name, setName] = useState("");

  useEffect(() => {
    setName(username);
  }, [username]);

  const myMeeting = async (element) => {
    const appID = 2128981886;
    const serverSecret = "672069aa6f48024ee59354bdfa721404";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      name
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
    <div className="w-full h-full">
      <div ref={myMeeting} />
    </div>
  );
};

export default Video;
