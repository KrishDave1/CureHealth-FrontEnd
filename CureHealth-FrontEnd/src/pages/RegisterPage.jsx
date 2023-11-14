import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [bg, setBg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pwd, setpwd] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await fetch("http://127.0.0.1:8000/data/patients", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     phone,
    //     pwd,
    //     gender,
    //     bg,
    //   }),
    // }); 
    // const data = await res.json();
    // if (data.status === 400 || !data) {
    //   window.alert("Invalid Registration");
    // } else {
    //   window.alert("Registration Successful");
    //   navigate("/login");
    // }
    console.log(bg, name, email, phone, pwd, gender);
  }

  return (
    <div className="flex justify-center items-center min-h-full w-full bg-blue-200 backdrop-blur-lg">
      <div className="flex mt-36 p-8 backdrop-blur-lg">
        <div className="flex flex-col p-14 w-1/2 rounded-l-lg backdrop-blur-lg">
          <div className="">
            <img
              src="doc.jpg"
              alt="doctor"
              className="h-64 rounded-lg sm:h-96 backdrop-blur-lg"
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
            <form className="mt-6 p-2" onSubmit={handleSubmit}>
              <div className="p-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  className="w-full p-1.5 shadow-lg rounded-md"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="p-4">
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={ email }
                  className="w-full p-1.5 shadow-lg rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="p-4">
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  value={phone}
                  className="w-full p-1.5 shadow-lg rounded-md"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex">
                <div className="w-1/2 p-4">
                  <select
                    className="w-full p-2 rounded-md"
                    name="Select gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value={ gender } disabled selected hidden>
                      Select gender
                    </option>
                    <option value={gender}>Male</option>
                    <option value={gender}>Female</option>
                    <option value={gender}>Other</option>
                  </select>
                </div>
                <div className="w-1/2 p-4">
                  <select className="w-full p-2 rounded-md"
                  value={bg} onChange={(e) => setBg(e.target.value)}>
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
                  value={ pwd }
                  onChange={(e) => setpwd(e.target.value)}
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
