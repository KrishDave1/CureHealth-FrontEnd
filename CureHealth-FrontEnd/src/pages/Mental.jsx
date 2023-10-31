import React from "react";
import Accordian from "../components/Accordian";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Questions = [
  {
    question: "What types of mental health conditions can be treated?",
    answer:
      "Mental health professionals can provide treatment for a wide range of conditions, including anxiety, depression, bipolar disorder, schizophrenia, PTSD, and more.",
  },
  {
    question: "When should I seek help for mental health concerns?",
    answer:
      "It's advisable to seek help when mental health concerns significantly impact daily life, relationships, or overall well-being. Early intervention is key to effective treatment.",
  },
  {
    question: "What is the difference between a therapist and pyachatrist",
    answer:
      "Therapists are licensed providers who can evaluate and support people with emotional or behavioral health concerns through talk therapy. Psychiatrists are medical doctors who primarily diagnose psychiatric conditions and can prescribe medication.",
  },
  {
    question: "What are the most common issues therapsists care for?",
    answer:
      "Therapists commonly care for patients that suffer from stress, anxiety, depression, and trauma. Although these are the most common issues we help with, our licensed therapists are trained to provide support for many mental health needs.",
  },
];
const Mental = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className='bg-[#FFCF9A] h-96 flex'>
        <div className='w-1/2 flex flex-col justify-evenly'>
          <div>
            <h2 className='text-6xl text-center mt-8'>Mental Health</h2>
            <p className='text-xl text-center pt-4'>
              talk therapy and psychiatry on your schedule from the comfort and
              privacy of home.
            </p>
          </div>
          <div className='flex mt-10 justify-center'>
            <div>
              <button
                className='bg-red-300 m-4 p-3 text-white'
                onClick={() => navigate("/login")}
              >
                Schedule my appointment
              </button>
            </div>
            <div>
              <button className='bg-red-300 m-4 p-3 text-white'>
                Create account
              </button>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <img
            src='mh.jpg'
            alt='primarycare'
            className='w-3/4 h-3/4 mr-20 mt-8 ml-16'
          />
        </div>
      </div>

      <div className='bg-white mt-2'>
        <h1 className='text-4xl text-center p-6'> What we Care for...</h1>

        <div className='flex'>
          <img
            src='mental.jpg'
            alt='mental'
            className='w-96 h-96 m-4 rounded-md'
          />

          <div className=''>
            <p className='text-2xl p-4 ml-8 font-medium '>
              Our Company licensed therapists and board-certified psychiatrists
              can get you back to feeling your best if you are feeling
              overwhelmed, stuck, or not like yourself. MDLIVE cares for
              hundreds of mental health conditions, but common reasons to seek
              care include:
            </p>
            <ul className='text-2xl ml-8 mb-5 p-3 pb-5 list-disc font-light '>
              <li>Difficulty overcoming anxiety</li>
              <li>Divorce or separation</li>
              <li>Experiencing a traumatic event</li>
              <li>Frequent bouts of depression</li>
              <li>Job loss or retirement</li>
              <li>LGBTQ+ support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-[#E5F2FA] h-72'>
        <h2 className='text-center font-medium text-4xl p-4'>
          When to use CureHealth Mental Health services?
        </h2>
        <ul className='text-2xl ml-8 mb-5 p-3 pb-5 list-disc font-light'>
          <li>
            You want the flexibility of an appointment seven days a week, even
            during evenings and weekends.
          </li>
          <li>
            You want your appointment to be from the comfort and privacy of
            home.
          </li>
          <li>
            You do not want to wait months to talk to someone. You can see a
            doctor or therapist in days, not weeks.
          </li>
          <li>
            You want a caring and trusted professional specially trained in
            virtual care.{" "}
          </li>
          <li>
            You want someone who can help you or your family, including your
            children, ages 10-17.
          </li>
        </ul>
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

export default Mental;
