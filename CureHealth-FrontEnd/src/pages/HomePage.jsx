/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col justify-center items-center m-9">
        <div className="text-4xl my-5">
          Using CureHealth is as easy as 3 steps.
        </div>
        <div className="text-xl">
          CureHealth is dedicated to helping you get better and stay well.
          <br />
          No matter what you need, we’re here for you.
        </div>
        <div className="flex w-full m-6">
          {" "}
          <div className="w-1/3 flex justify-evenly">
            <div>
              <img src="./images/Register-icon.png" alt="Register" />
            </div>
            <div>
              {" "}
              <div className="text-2xl mb-4">Step 1</div>
              <div className="text-lg">Create your account</div>
            </div>
          </div>
          <div className="w-1/3 flex justify-evenly">
            <div>
              <img src="./images/Calendar-icon.png" alt="Calender" />
            </div>
            <div>
              {" "}
              <div className="text-2xl mb-4">Step 2</div>
              <div className="text-lg">
                Analyse your situation <br />
                with 3 levels of analysis
              </div>
            </div>
          </div>
          <div className="w-1/3 flex justify-evenly">
            <div>
              <img src="./images/doctor-icon_0.png" alt="Chat" />
            </div>
            <div>
              {" "}
              <div className="text-2xl mb-4">Step 3</div>
              <div className="text-lg">Talk to Doctor</div>
            </div>
          </div>
        </div>
        <div>
          <button
            className="bg-red-300 m-4 p-3 text-white rounded-lg w-36 hover:bg-red-500 ease-linear duration-300"
            onClick={() => navigate("/register")}
          >
            Start Now
          </button>
        </div>
      </div>
      <div className="">
        <h2 className="text-4xl text-center">What we care for</h2>
        <div className="flex p-10">
          <div className="p-4">
            <img src="urgent.png" alt="urgent" />
            <h1 className="text-3xl text-orange-300 py-4">Urgent Care</h1>
            <ul className="list-disc">
              <li>Birth Control</li>
              <li>Ear Pain</li>
              <li>Sinus Problems</li>
              <li>Headache</li>
              <li>Sore Throat</li>
              <li>Covid-19</li>
              <li>
                <button
                  className="underline"
                  onClick={() => navigate("/urgentcare")}
                >
                  And more
                </button>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <img src="primary.png" alt="primary" />
            <h1 className="text-3xl text-orange-300 py-4">Primary Care</h1>
            <ul className="list-disc">
              <li>Asthama</li>
              <li>Diabetes(Type 2)</li>
              <li>High Blood Pressure</li>
              <li>High Cholestrol</li>
              <li>Thyroid issues</li>
              <li>
                <button
                  className="underline"
                  onClick={() => navigate("/primarycare")}
                >
                  And more
                </button>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <img src="met.png" alt="primary" />
            <h1 className="text-3xl text-orange-300 py-4">Mental health</h1>
            <ul className="list-disc">
              <li>Difficulty overcoming anxiety</li>
              <li>Divorce or separation</li>
              <li>Experiencing a traumatic event</li>
              <li>Frequent bouts of depression</li>
              <li>Job loss or retirement</li>
              <li>LGBTQ+ support</li>
              <li>
                {" "}
                <button
                  className="underline"
                  onClick={() => navigate("/mentalhealth")}
                >
                  And more
                </button>{" "}
              </li>
            </ul>
          </div>
          <div className="p-4">
            <img src="dermat.png" alt="primary" />
            <h1 className="text-3xl text-orange-300 py-4">Dermatology</h1>
            <ul className="list-disc">
              <li>Acne</li>
              <li>Boils</li>
              <li>Cysts</li>
              <li>Dermatitis</li>
              <li>Warts</li>
              <li>Fungal skin infection</li>
              <li>Hives</li>
              <li>
                {" "}
                <button
                  className="underline"
                  onClick={() => navigate("/dermatology")}
                >
                  And more
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-center text-4xl">
          What people have to say about us...
        </h2>
        <Slider />
      </div>
    </div>
  );
};

export default HomePage;
