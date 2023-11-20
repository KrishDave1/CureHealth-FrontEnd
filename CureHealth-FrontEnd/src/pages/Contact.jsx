/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { useGlobalContext } from "../context";

const Contact = () => {
  const { email } = useGlobalContext();
  const [semail, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    setEmail(email);
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(semail, message, subject);
    let subject_Type = 1;
    const response  = fetch("http://127.0.0.1:8000/email-sender/send-email/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject_Type: subject_Type,
        email: semail,
        message: message,
        subject: subject
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
    setEmail("");
    setMessage("");
    setSubject("");
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <div className=''>
        <h1 className='text-4xl text-center'>Contact Us</h1>
      </div>
      <div className=''>
        <form
          className='flex flex-col justify-center w-full'
          onSubmit={handleSubmit}
        >
          <div className='p-6'>
            <div>
              <label htmlFor='e' className='text-lg'>
                Email:
              </label>
            </div>
            <input
              type='text'
              name='name'
              id='e'
              value={semail}
              size='10'
              className='w-64 rounded shadow-sm shadow-slate-400 p-2'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='p-6'>
            <div>
              <label htmlFor='p' className='text-lg'>
                Subject:
              </label>
            </div>
            <input
              type='text'
              name='name'
              id='p'
              value={ subject }
              className='w-64 rounded shadow-sm shadow-slate-400 p-2'
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className='p-6'>
            <div>
              <label htmlFor='t' className='text-lg'>
                Message:
              </label>
            </div>
            <textarea
              className='w-1/2 rounded shadow-sm shadow-slate-400 p-2'
              rows='5'
              cols='100'
              id='t'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button className='bg-red-300 m-4 p-3 rounded-xl w-1/3 text-white'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
