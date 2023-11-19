import React, { useState } from "react";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
const CreateUser = () => {
  // const [user, setUsername] = useState("test");

  // useEffect(() => {
  //   const createUser = async () => {
  //     const data = {
  //       username: `${username}`,
  //       secret: `${userId}`,
  //       email: `${email}`,
  //       first_name: `${username}`,
  //       last_name: `${username}`,
  //       // custom_json: { fav_game: "Candy Crush", high_score: 2002 },
  //     };

  //     const config = {
  //       method: "post",
  //       url: "https://api.chatengine.io/users/",
  //       headers: {
  //         "PRIVATE-KEY": "bbe0b120-aa3f-43bb-b300-e1c1a55fc644", // Replace with your actual private key
  //         "Content-Type": "application/json", // Specify the content type
  //       },
  //       data: data,
  //     };

  //     try {
  //       const response = await axios(config);
  //       console.log("User created successfully!", response.data);
  //     } catch (error) {
  //       console.error(
  //         "Error creating user:",
  //         error.response ? error.response.data : error.message
  //       );
  //     }

  const [user, setUsername] = useState("test");

  function createDirectChat(creds) {
    getOrCreateChat(creds, { is_direct_chat: true, usernames: [user] }, () =>
      setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          defaultValue={"Vaibhav"}
          value={user}
          onChange={(e) => setUsername(e.target.value)}
          className="shadow-md"
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }
  return (
    <div className="h-screen w-11/12">
      <ChatEngine
        height="100vh"
        userName={user}
        userSecret={user + "ddjdjd"}
        projectID="aa71ae34-63e9-4047-958c-e4b54d115839"
        renderNewChatForm={(creds) => renderChatForm(creds)}
      />
    </div>
  );
};
export default CreateUser;
