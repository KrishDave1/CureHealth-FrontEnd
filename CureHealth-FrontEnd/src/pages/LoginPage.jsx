import React from 'react'
import { useGlobalContext } from '../context'

const LoginPage = () => {
    const { contextData } = useGlobalContext();

  return (
    <>
      <div className='login-page'>
        <h1>Login Page</h1>
      </div>
      <div className='flex justify-evenly'>
        <div className=''>
          <form onSubmit={contextData.loginUser}>
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
        <div className=' h-96'>
          <img src='../../Image.avif' alt='Image' className='object-cover'/>
        </div>
      </div>
    </>
  );
}

export default LoginPage