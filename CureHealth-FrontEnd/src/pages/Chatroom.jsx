import React, { useState } from "react";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import { useGlobalContext } from "../context";
import axios from "axios";

const Chatroom = () => {

const CreateUser = () => {
  const { userId } = useGlobalContext();
  

  useEffect(() => {
    const createUser = async () => {
      const data = {
        username: 'bob_baker',
        secret: 'secret-123-jBj02',
        email: 'b_baker@mail.com',
        first_name: 'Bob',
        last_name: 'Baker',
        custom_json: { fav_game: 'Candy Crush', high_score: 2002 },
      };

      const config = {
        method: 'post',
        url: 'https://api.chatengine.io/users/',
        headers: {
          'PRIVATE-KEY': '{{private_key}}', // Replace with your actual private key
          'Content-Type': 'application/json', // Specify the content type
        },
        data: data,
      };

      try {
        const response = await axios(config);
        console.log('User created successfully!', response.data);
      } catch (error) {
        console.error('Error creating user:', error.response ? error.response.data : error.message);
      }
    };

    // Call the function when the component mounts
    createUser();
  }, []); // Empty dependency array ensures that the effect runs once when the component mounts

  return <div>CreateUser component</div>; // Your actual component UI goes here
};

  const chatProps = useMultiChatLogic(
    "0a0fef24-9ef0-4c24-a0ef-507c2d745aab",
    "Vaibhav24",
    "apple2"
  );
    return (
      <>
        <MultiChatWindow {...chatProps} />
        <MultiChatSocket {...chatProps} />
      </>
    );
  }
  // const [username, setUsername] = useState("");

  // function createDirectChat(creds) {
  //   getOrCreateChat(
  //     creds,
  //     { is_direct_chat: true, usernames: [username] },
  //     () => setUsername("")
  //   );
  // }

  // function renderChatForm(creds) {
  //   return (
  //     <div>
  //       <input
  //         placeholder="Username"
  //         value={username}
  //         onChange={(e) => setUsername(e.target.value)}
  //         className="shadow-md"
  //       />
  //       <button onClick={() => createDirectChat(creds)}>Create</button>
  //     </div>
  //   );
  //}
  // return (
  //   <div style={{ height: "100vh" }}>
  //     <MultiChatWindow {...chatProps} />
  //     <MultiChatSocket {...chatProps} style={{ height: "100vh" }} />
  //   </div>
  // );
  // return (
  //   <div style={{ height: "100vh", width: "100vw" }}>
  //     <PrettyChatWindow
  //       projectId="0a0fef24-9ef0-4c24-a0ef-507c2d745aab"
  //       username=" Krish20"
  //       secret="apple3"
  //       style={{ height: "100%" }}
  //     />
  //   </div>
  // );
  // return (
  //   <ChatEngine
  //     height="100vh"
  //     userName="Vaibhav24"
  //     userSecret="apple2"
  //     projectID="0a0fef24-9ef0-4c24-a0ef-507c2d745aab"
  //     renderNewChatForm={(creds) => renderChatForm(creds)}
  //   />
  // );

export default Chatroom;
