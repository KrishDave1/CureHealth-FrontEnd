import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { contextData } = useGlobalContext();

  return (
    <div className="flex flex-col h-screen bg-green-200">
      <div className="flex m-12">
        <div className="w-2/3">
          <img src="Login.png" alt="Image" className="w-full h-[450px]" />
        </div>
        <div className="flex flex-col items-center w-1/3 shadow-xl bg-slate-200">
          <div className="login-page text-green-500 mt-4 text-center text-3xl">
            <h1>Login</h1>
          </div>
          <form
            onSubmit={contextData.loginUser}
            className="flex flex-col h-full mt-10 "
          >
            <div className="p-4 h-20 ">
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="p-2 shadow-lg w-full h-12"
              />
            </div>
            {/* <div className='p-4 h-20 '>
              <input
                type='text'
                name='username'
                placeholder='Enter your username'
                className='p-2 shadow-lg w-full h-12'
              />
            </div> */}
            <div className="p-4 h-20">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="p-2 shadow-lg w-full h-12"
              />
            </div>
            <div className="p-4 flex justify-center">
              <input
                type="submit"
                value="Login"
                className="bg-green-500 text-white p-3 w-64"
              />
            </div>
            <div className="flex justify-center">
              Don&apos;t have an account? <Link to="/register"> Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
