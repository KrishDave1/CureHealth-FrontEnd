import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { contextData } = useGlobalContext();

  return (
    <>
      <div className='flex flex-col h-screen bg-green-200'>
        <div className='flex m-12'>
          <div className='w-1/2'>
            <img
              src='Login.png'
              alt='Image'
              className='w-full h-[450px] rounded-tl-lg'
            />
            <div className="text-xl text-center bg-slate-50 rounded-bl-lg cursor-pointer">
              <Link
                to='/loginDoc'
              >
                Doctors Page Login
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center w-1/2 shadow-xl bg-slate-200 rounded-r-lg'>
            <div className='login-page mt-4 text-center text-3xl'>
              <h1>Login</h1>
            </div>
            <form
              onSubmit={contextData.loginUser}
              className='flex flex-col h-full mt-10 '
            >
              <div className='p-4 h-20 '>
                <input
                  type='text'
                  name='email'
                  placeholder='Enter your email'
                  className='p-2 shadow-lg w-full h-12'
                />
              </div>
              <div className='p-4 h-20'>
                <input
                  type='password'
                  name='password'
                  placeholder='Enter your password'
                  className='p-2 shadow-lg w-full h-12'
                />
              </div>
              <div className='p-4 flex justify-center'>
                <input
                  type='submit'
                  value='Login'
                  className='bg-green-500 text-white p-3 w-64 rounded-lg hover:bg-green-600 ease-linear duration-300 cursor-pointer'
                />
              </div>
              <div className='flex justify-center'>
                Don&apos;t have an account? <Link to='/register'> Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
