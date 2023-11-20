/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { useGlobalContext } from "../context";

const Contact = () => {
  const { username, email } = useGlobalContext();
  const [name, setName] = useState("");
  const [semail, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    setName(username);
    setEmail(email);
  }, [username, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, semail, message, subject);
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
              <label htmlFor='f' className='text-lg'>
                Username:
              </label>
            </div>
            <input
              type='text'
              name='name'
              id='f'
              value={name}
              size='10'
              className='w-64 rounded shadow-sm shadow-slate-400 p-2'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
