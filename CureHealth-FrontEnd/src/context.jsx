/** @format */

import React, { useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken") ? JSON.parse(localStorage.getItem("authToken")) : null);
  const [user, setUser] = useState(authToken ? jwt_decode(authToken.access) : null);

  const Navigate = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://127.0.0.1:8000/healthcare_api/token/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        }),
      }
    );
    let data = await response.json();
    if (response.status === 200) {
      setUser(jwt_decode(data.access));
      setAuthToken(data);
      localStorage.setItem("authToken", JSON.stringify(data));
      Navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  let contextData = {
    user: user,
    loginUser: loginUser,
  };
  return (
    <AppContext.Provider value={{ contextData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
