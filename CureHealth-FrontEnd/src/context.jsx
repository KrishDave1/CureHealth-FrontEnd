/** @format */

import React, { useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const [user, setUser] = useState(
    authToken ? jwt_decode(authToken.access) : null
  );

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
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      }
    );
    let data = await response.json();
    if (response.status === 200) {
      setUser(jwt_decode(data.access));
      console.log(jwt_decode(data.access));
      console.log(data);
      setAuthToken(data);
      localStorage.setItem("authToken", JSON.stringify(data));
      Navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  let registerUser = async (e) => {
    e.preventDefault();
    if (e.target.password.value !== e.target.cpwd.value) {
      alert("Passwords do not match");
      return;
    }
    if (e.target.password.value.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }
    if (e.target.phone.value.length !== 10) {
      alert("Invalid phone number");
      return;
    }
    const response = await fetch(
      "http://127.0.0.1:8000/data/patients",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
          phone_number: e.target.phone.value,
          // gender: e.target.gender.value,
          blood_Group: e.target.bloodgroup.value
        }),
      }
    );
    let data = await response.json();
    console.log(data);
    if (response.status === 200) {
      console.log("done")
    }
  };

  let logoutUser = () => {
    setUser(null);
    setAuthToken(null);
    localStorage.removeItem("authToken");
    Navigate("/login");
  };

  let contextData = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
    registerUser: registerUser,
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
