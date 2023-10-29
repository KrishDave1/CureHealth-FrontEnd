/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./VideoCalling.css";

const VideoCallingForm = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const navi = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let room = e.target.room.value;
    setRoom(room);
    let name = e.target.name.value;
    setName(name);

    let response = await fetch(
      `http://127.0.0.1:8000/get_token/?channel=${room}`
    );
    let data = await response.json();

    let UID = data.uid;
    let token = data.token;

    sessionStorage.setItem("UID", UID);
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("room", room);
    sessionStorage.setItem("name", name);

    window.open("/video/", "_self");
  };

  return (
    <main>
      <div className='flex justify-center items-center'>
        <section id='form-container'>
          <img id='logo' src='../../images/chat-icon.jpg' />
          <div id='welcome-message'>
            <h1>Welcome to MyChat</h1>
            <p>A group video calling platform made just for you!</p>
          </div>

          <form id='form' onSubmit={handleSubmit}>
            <div className='field-wrapper'>
              <div className='form-field'>
                <label>Room:</label>
                <input name='room' placeholder='Enter a room name...' />
              </div>

              <div className='form-field'>
                <label>Name:</label>
                <input name='name' placeholder='Enter your name...' />
              </div>

              <div className='form-field flex justify-center'>
                <button
                  type='submit'
                  value='Join Stream'
                  className=' bg-sky-700 text-white font-medium py-2 px-4 rounded'
                >
                Join Stream
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default VideoCallingForm;
