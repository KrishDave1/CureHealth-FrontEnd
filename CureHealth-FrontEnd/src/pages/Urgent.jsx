import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Urgent = () => {
  const location = useLocation();
  const Navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="bg-[#FFCF9A] h-96 flex">
        {/* <div className="flex"> */}
        <div className="w-1/2 flex flex-col justify-evenly">
          <div className="mb-6">
            <h2 className="text-6xl text-center mt-8">Urgent Care</h2>
            <p className="text-2xl text-center pt-4">
              on-demand care and prescriptions from board- certified doctors
              24/7/365. anytime. anywhere.
              <br />
              condition management.{" "}
            </p>
          </div>
          <div className="flex p-3 justify-center">
            <div>
              <button
                className="bg-red-300 m-4 p-3 text-white rounded-lg hover:bg-red-500 ease-linear duration-300"
                onClick={() => Navigate("/login")}
              >
                I need care
              </button>
            </div>
            <div>
              <button
                className="bg-red-300 m-4 p-3 text-white rounded-lg hover:bg-red-500 ease-linear duration-300"
                onClick={() => Navigate("/login")}
              >
                Create account
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="urgentcare.png"
            alt="urgentcare"
            className="w-3/4 h-3/4 mr-20 mt-8 ml-16"
          />
        </div>
      </div>
      <div className="bg-white mt-2">
        <h1 className="text-4xl text-center p-6"> What we Care for...</h1>

        <div className="flex">
          <img
            src="c19.jpeg"
            alt="covid"
            className="w-96 h-96 m-4 rounded-md"
          />

          <div className="">
            <p className="text-2xl p-4 ml-8 font-medium ">
              Talk to an urgent care doctor in minutes. CureHealth
              board-certified doctors have an average of 15 years of experience
              and provide reliable care for more than 80 common, non-emergency
              conditions, including:
            </p>
            <ul className="text-2xl ml-8 mb-5 p-3 pb-5 list-disc font-light ">
              <li>Birth Control</li>
              <li>Ear Pain</li>
              <li>Sinus Problems</li>
              <li>Headache</li>
              <li>Sore Throat</li>
              <li>Covid-19</li>
            </ul>
            <div className="flex justify-center text-xl">
              <button
                className="bg-red-300 p-3 text-white rounded-lg hover:bg-red-500"
                onClick={() => Navigate("/login")}
              >
                I need care
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E5F2FA] h-[420px] mt-4">
        <h2 className="text-center font-medium text-4xl p-4">
          When to use CureHealth Urgent Health services?
        </h2>
        <p className="text-2xl font-light p-5">
          Getting sick is always inconvenient, whether you are at work or it is
          after hours. Maybe you have been dealing with a nagging symptom or
          condition and would like to consult a doctor on what to do. When you
          need care fast, including prescriptions, CureHealth offers reliable
          24/7 health care by phone or video. Anytime. Anywhere. See an
          Curehealth doctor when:
        </p>
        <ul className="text-xl ml-8 mb-5 p-3 pb-5 list-disc font-light">
          <li>
            You are feeling sick and prefer to get care from the safety of home
            without exposing yourself to germs in a waiting room.
          </li>
          <li>
            It is late at night, and you are having symptoms that keep you
            awake.
          </li>
          <li>
            You do not want to wait months to talk to someone. You can see a
            doctor or therapist in days, not weeks.
          </li>
          <li>
            You are traveling out of state and do not know if an urgent care
            clinic is open nearby.
          </li>
          <li>
            You need a prescription on a weekend or evening when your doctor
            &apos;s office is closed.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Urgent;
