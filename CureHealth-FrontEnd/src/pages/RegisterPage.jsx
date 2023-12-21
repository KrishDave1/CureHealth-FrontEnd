import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import "./Register.css";

const RegisterPage = () => {
  const { contextData } = useGlobalContext();
  const [bg, setBg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pwd, setpwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const bloodgroup = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
  ];
  const handleBg = (e) => {
    setBg(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  return (
    <div className="flex justify-center items-center min-h-full w-full bg-blue-200">
      <div className="flex mt-36 p-8">
        <div className="flex flex-col p-14 w-1/2 rounded-l-lg backdroping">
          <div className="">
            <img
              src="doc.jpg"
              alt="doctor"
              className="h-64 rounded-lg sm:h-96"
            />
          </div>
          <div className="bg-white mt-8 p-4 rounded-lg">
            <div className="">
              <h2 className="text-2xl text-center">
                Welcome To Doctor&apos;s Platform
              </h2>
            </div>
            <div className="flex justify-center mt-3 ">
              <button
                className="bg-black text-lg text-white p-2 rounded-xl"
                onClick={() => navigate("/registerdoc")}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white w-1/2 rounded-r-lg">
          <div className="bg-slate-200 p-7 m-10 ">
            <div className="">
              <h2 className="text-center text-3xl">Get Started</h2>
              <h4 className="text-center text-xl mt-2">
                Already have an account?{" "}
                <span className="text-blue">
                  <Link to="/login">Login</Link>
                </span>
              </h4>
            </div>
            <form className="mt-6 p-2" onSubmit={contextData.registerUser}>
              <div className="p-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  className="w-full p-1.5 shadow-lg rounded-md"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="p-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  className="w-full p-1.5 shadow-lg rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="p-4">
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={phone}
                  className="w-full p-1.5 shadow-lg rounded-md"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="flex">
                <div className="w-1/2 p-4">
                  <select
                    className="w-full p-2 rounded-md"
                    name="gender"
                    onChange={handleGender}
                    defaultValue={gender}
                    required
                  >
                    {genders.map((gender) => (
                      <option key={gender.value}>{gender.label}</option>
                    ))}
                  </select>
                </div>
                <div className="w-1/2 p-4">
                  <select
                    className="w-full p-2 rounded-md"
                    onChange={handleBg}
                    name="bg"
                    defaultValue={bg}
                    required
                  >
                    {bloodgroup.map((bg) => (
                      <option key={bg.value}>{bg.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="p-4">
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full p-1.5 shadow-lg rounded-md"
                  name="password"
                  value={pwd}
                  onChange={(e) => setpwd(e.target.value)}
                  required
                />
              </div>
              <div className="p-4">
                <input
                  type="password"
                  placeholder="Confirm password"
                  name="cpwd"
                  value={cpwd}
                  onChange={(e) => setCpwd(e.target.value)}
                  className="w-full p-1.5 shadow-lg rounded-md"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button className="text-center text-lg p-3 rounded-md bg-black text-white">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
