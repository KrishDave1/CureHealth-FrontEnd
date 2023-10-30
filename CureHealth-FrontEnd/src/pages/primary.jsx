import { useState } from "react";
import Accordian from "../components/Accordian";

const Questions = [
  {
    question: "What is primary care?",
    answer:
      "Primary care is a comprehensive and foundational form of medical care focused on maintaining overall health, preventing illnesses, and managing chronic conditions. Primary care providers are often the first point of contact in the healthcare system.",
  },
  {
    question: "Who is a primary care provider (PCP)?",
    answer:
      "A primary care provider can be a family physician, general practitioner, internist, or pediatrician. They are trained to provide a wide range of healthcare services for patients of all ages.",
  },
  {
    question: "What services does primary care encompass?",
    answer:
      "Primary care includes services like routine check-ups, preventive care, immunizations, treatment for common illnesses, chronic disease management, health screenings, and referrals to specialists when necessary.",
  },
  {
    question: "What is Wellness Screening?",
    answer:
      "A Wellness Screening is a once-per-year preventive care appointment designed to identify potential health issues, examine your lifestyle and health goals, develop a personalized wellness plan, and recommend follow-up care if necessary.",
  },
  {
    question: "What is a routine check-up?",
    answer:
      "Routine Care is ongoing, regular appointments with a dedicated PCP who can help you manage your health and chronic conditions through lab work, diagnostics, self-reporting, and specialist referrals.",
  },
  {
    question: "Can I choose my primary care doctor?",
    answer:
      "Yes, you can choose your primary care doctor. They are trained to provide a wide range of healthcare services for patients of all ages.",
  },
];

const Primary = () => {
  return (
    <>
      <div className='bg-[#FFCF9A] h-96 flex'>
        {/* <div className="flex"> */}
        <div className='w-1/2 flex flex-col justify-evenly'>
          <div className='mb-6'>
            <h2 className='text-6xl text-center mt-8'>Primary Care</h2>
            <p className='text-xl text-center pt-4'>
              convenient wellness screenings, routine care, and chronic
              <br />
              condition management.{" "}
            </p>
          </div>
          <div className='flex p-3 justify-center'>
            <div>
              <button className='bg-red-300 m-4 p-3 text-white rounded-lg hover:bg-red-500 ease-linear duration-300'>
                Find my doctor
              </button>
            </div>
            <div>
              <button className='bg-red-300 m-4 p-3 text-white rounded-lg hover:bg-red-500 ease-linear duration-300'>
                Create account
              </button>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <img
            src='pri.png'
            alt='primarycare'
            className='w-3/4 h-3/4 mr-20 mt-8 ml-16'
          />
        </div>
      </div>

      <div className='bg-white mt-2 h-72 p-2'>
        <h1 className='text-4xl text-center p-9'> What we Care for...</h1>
        <p className='text-xl text-center p-7'>
          Schedule visits with a board-certified doctor for preventive wellness
          screenings and routine care for non-urgent medical concerns, and
          ongoing care for conditions like type 2 diabetes, asthma, and high
          blood pressure. You can see the same doctor for each appointment so
          your doctor can get to know you and your health and wellness needs.
        </p>
      </div>
      <div className='bg-slate-100 h-1/3'>
        <h2 className='text-3xl text-center mt-2 p-3'>
          When to use CureHealth Primary Care?{" "}
        </h2>
        <div className='flex'>
          <img
            src='PrimaryCare.jpg'
            alt='Primary'
            className='m-4 w-96 h-96 rounded-md'
          />
          <div>
            <p className='text-2xl p-4 ml-8 font-medium'>
              Flexible scheduling and an easy-to-use site means you can see an
              MDLIVE doctor in days instead of weeks or months. If included in
              your benefits, use Primary Care when:
            </p>

            <div className='flex justify-evenly'>
              <ul className='text-2xl ml-8 mb-5 p-3 pb-5 list-disc font-light flex flex-col'>
                <li className='mb-4'>
                  You do not currently have a primary care doctor but want one.
                </li>
                <li className='mb-4'>
                  You cannot get an in-person checkup for weeks or months.
                </li>
                <li className='mb-4'>
                  You want care from the safety and comfort of home.
                </li>
                <li className='mb-4'>
                  You want a quicker, more convenient way to connect with your
                  doctor.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white mt-3'>
        <h2 className='text-center text-3xl'>Frequently asked Questions</h2>
        {Questions.map((question, index) => (
          <Accordian
            key={index}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>
    </>
  );
};

export default Primary;
