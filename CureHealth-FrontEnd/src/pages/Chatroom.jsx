import React, { useState } from "react";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
// import { useGlobalContext } from "../context";

const Chatroom = () => {
  // const chatProps = useMultiChatLogic(
  //   "0a0fef24-9ef0-4c24-a0ef-507c2d745aab",
  //   "Vaibhav24",
  //   "apple2"
  // );
  const [username, setUsername] = useState("");

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="shadow-md"
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }
  // return (
  //   <div style={{ height: "100vh" }}>
  //     <MultiChatWindow {...chatProps} />
  //     <MultiChatSocket {...chatProps} style={{ height: "100vh" }} />
  //   </div>
  // );
  return (
    <ChatEngine
      height="100vh"
      userName="Vaibhav24"
      userSecret="apple2"
      projectID="0a0fef24-9ef0-4c24-a0ef-507c2d745aab"
      renderNewChatForm={(creds) => renderChatForm(creds)}
    />
  );
};

export default Chatroom;
