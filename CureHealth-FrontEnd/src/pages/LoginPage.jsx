import React from 'react'
import { useGlobalContext } from '../context'

const LoginPage = () => {
    const { contextData } = useGlobalContext();

  return (
    <div className='flex flex-col'>
      <div className='login-page  text-center text-3xl'>
        <h1>Login Page</h1>
      </div>
      <div className='flex'>
        <div className='flex flex-col w-1/2'>
          <form onSubmit={contextData.loginUser} className='flex flex-col h-full'>
            <input
              type='text'
              name='username'
              placeholder='Enter your username'
            />
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
            />
            <input
              type='submit'
              value='Login to your account'
              className='btn'
            />
          </form>
        </div>
        <div className='w-1/2'>
          <img src='../../Image.avif' alt='Image' className='w-full' />
        </div>
      </div>
    </div>
  );
}

export default LoginPage