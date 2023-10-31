import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [bg, setBg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pwd, setpwd] = useState("");
  const [cpwd, setcpwd] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-full w-full bg-blue-200">
      <div className="flex mt-36 p-8">
        <div className="flex flex-col p-14 w-1/2 rounded-l-lg ">
          <div className="">
            <img src="doc.jpg" alt="doctor" className="h-64 rounded-lg sm:h-96" />
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
            <form className="mt-6 p-2">
              <div className="p-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-1.5 shadow-lg rounded-md"
                />
              </div>
              <div className="p-4">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-1.5 shadow-lg rounded-md"
                />
              </div>
              <div className="p-4">
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full p-1.5 shadow-lg rounded-md"
                />
              </div>
              <div className="flex">
                <div className="w-1/2 p-4">
                  <select className="w-full p-2 rounded-md" name="Select gender" required>
                    <option value="" disabled selected hidden>
                      select gender
                    </option>
                    <option value={gender}>Male</option>
                    <option value={gender}>Female</option>
                    <option value={gender}>Other</option>
                  </select>
                </div>
                <div className="w-1/2 p-4">
                  <select className="w-full p-2 rounded-md">
                    <option value="" disabled selected hidden>
                      select blood group
                    </option>
                    <option value={bg}>A+</option>
                    <option value={bg}>A-</option>
                    <option value={bg}>B+</option>
                    <option value={bg}>B-</option>
                    <option value={bg}>AB+</option>
                    <option value={bg}>AB-</option>
                    <option value={bg}>O+</option>
                    <option value={bg}>O-</option>
                  </select>
                </div>
              </div>
              <div className="p-4">
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full p-1.5 shadow-lg rounded-md"
                />
              </div>
              <div className="p-4">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full p-1.5 shadow-lg rounded-md"
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
