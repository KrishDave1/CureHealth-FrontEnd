/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center m-9'>
        <div className='text-4xl my-5'>
          Using CureHealth is as easy as 3 steps.
        </div>
        <div className='text-xl'>
          CureHealth is dedicated to helping you get better and stay well.
          <br />
          No matter what you need, we’re here for you.
        </div>
        <div className='flex w-full m-6'>
          {" "}
          <div className='w-1/3 flex justify-evenly'>
            <div>
              <img src='./images/Register-icon.png' alt='Register' />
            </div>
            <div>
              {" "}
              <div className='text-2xl mb-4'>Step 1</div>
              <div className='text-lg'>Create your account</div>
            </div>
          </div>
          <div className='w-1/3 flex justify-evenly'>
            <div>
              <img src='./images/Calendar-icon.png' alt='Calender' />
            </div>
            <div>
              {" "}
              <div className='text-2xl mb-4'>Step 2</div>
              <div className='text-lg'>
                Analyse your situation <br />
                with 3 levels of analysis
              </div>
            </div>
          </div>
          <div className='w-1/3 flex justify-evenly'>
            <div>
              <img src='./images/doctor-icon_0.png' alt='Chat' />
            </div>
            <div>
              {" "}
              <div className='text-2xl mb-4'>Step 3</div>
              <div className='text-lg'>Talk to Doctor</div>
            </div>
          </div>
        </div>
        <div>
          <button className='bg-red-300 m-4 p-3 text-white rounded-lg w-36 hover:bg-red-500'>
            Start Now
          </button>
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default HomePage;
