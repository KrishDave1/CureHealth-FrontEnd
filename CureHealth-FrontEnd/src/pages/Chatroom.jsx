import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import axios from "axios";

const CreateUser = () => {
  const { username } = useGlobalContext();
  const projectId = "aa71ae34-63e9-4047-958c-e4b54d115839";
  const secret = "bye";
  const [name, setName] = useState("Pratham");
  const [create, setCreate] = useState(false);

  useEffect(() => {
    setName(username);
  }, [username]);

  useEffect(() => {
    async function handleClick() {
      // console.log(name);
      // setName(name);
      try {
        let data1 = {
          username: name,
          secret: "hello",
        };
        let get = {
          method: "get",
          url: "https://api.chatengine.io/users/me/",
          headers: {
            "project-id": "aa71ae34-63e9-4047-958c-e4b54d115839",
          },
          data: data1,
        };
        const res = await axios(get);
        console.log(JSON.stringify(res.data));
      } catch (error) {
        let data = {
          username: name,
          secret: "hello",
        };

        let config = {
          method: "post",
          url: "https://api.chatengine.io/users/",
          headers: {
            "PRIVATE-KEY": "bbe0b120-aa3f-43bb-b300-e1c1a55fc644",
            "Content-Type": "application/json",
          },
          data,
        };
        const response = await axios(config);
        console.log(JSON.stringify(response.data));
      }
    }
    if (create) {
      handleClick();
      setCreate(false);
    }
  }, [create]);

  const chatProps = useMultiChatLogic(projectId, name, "hello");

  return (
    <div className="flex w-full">
      <div className="w-1/12">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => setCreate(true)}>Create Chat</button>
      </div>
      <div className="w-full">
        <MultiChatSocket {...chatProps} style={{ height: "100vh" }} />
        <MultiChatWindow {...chatProps} style={{ height: "100vh" }} />
      </div>
    </div>
  );
};
export default CreateUser;
