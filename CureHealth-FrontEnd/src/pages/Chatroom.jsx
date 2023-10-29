/** @format */

import React, { useState, useEffect } from "react";

const Chatroom = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = messageInput;
    const chatSocket = new WebSocket("ws://127.0.0.1:8000/ws/socket-server/");

    chatSocket.onopen = () => {
      chatSocket.send(
        JSON.stringify({
          message: message,
        })
      );
    };

    setMessageInput("");
  };

  useEffect(() => {
    const chatSocket = new WebSocket("ws://127.0.0.1:8000/ws/socket-server/");

    chatSocket.onmessage = function (e) {
      let data = JSON.parse(e.data);
      console.log("Data:", data);

      if (data.type === "chat") {
        setMessages([...messages, data.message]);
      }
    };

    return () => {
      chatSocket.close();
    };
  }, [messages]);

  return (
    <div>
      <h1>Lets chat!</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='message'
          value={messageInput}
          onChange={handleInputChange}
        />
        <button type='submit'>Send</button>
      </form>

      <div id='messages'>
        {messages.map((message, index) => (
          <div key={index}>
            <p>{message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatroom;
