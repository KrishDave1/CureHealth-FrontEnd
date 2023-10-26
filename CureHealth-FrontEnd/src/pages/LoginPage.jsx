import React from 'react'
import { useGlobalContext } from '../context'

const LoginPage = () => {
    const { contextData } = useGlobalContext();

  return (
      <div>
          <form onSubmit={contextData.loginUser}>
              <input type="text" name="username"
                  placeholder="Enter your username" />
                <input type="password" name="password" placeholder="Enter your password"/>
                <input type="submit" value="Login to your account" className="btn"/>
          </form>
    </div>
  )
}

export default LoginPage