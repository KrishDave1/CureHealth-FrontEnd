import React from "react";
import Accordian from "../components/Accordian";
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
  return (
    <>
      <div className="bg-orange-300 h-1/3">
        <div>
          <h2 className="text-4xl mt-8">Mental Health</h2>
          <p className="text-xl pt-4">
            talk therapy and psychiatry on your schedule from the comfort and
            privacy of home.
          </p>
        </div>
        <div className="flex mt-10">
          <div>
            <button
              className="bg-red-300 m-4 p-3 text-white"
              onClick={() => navigate("/login")}
            >
              Schedule my appointment
            </button>
          </div>
          <div>
            <button className="bg-red-300 m-4 p-3 text-white">
              Create account
            </button>
          </div>
        </div>
      </div>

      <div className="bg-orange-200 mt-2">
        <h1 className="text-4xl text-center p-6"> What we Care for...</h1>

        <div className="flex">
          <img src="mental.jpg" alt="mental" className="w-96 h-96 mx-36" />

          <div>
            <p className="text-xl text-white ">
              Our Company licensed therapists and board-certified psychiatrists
              can get you back to feeling your best if you are feeling
              overwhelmed, stuck, or not like yourself. MDLIVE cares for
              hundreds of mental health conditions, but common reasons to seek
              care include:
            </p>
            <ul className="text-xl pt-3 list-disc">
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
      <div className="bg-slate-100 mt-3">
        <h2 className="text-center">Frequently asked Questions</h2>
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
