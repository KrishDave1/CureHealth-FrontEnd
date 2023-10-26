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
      <div className="bg-orange-300 h-1/3">
        <div>
          <h2 className="text-4xl mt-8">Primary Care</h2>
          <p className="text-xl pt-4">
            convenient wellness screenings, routine care, and chronic condition
            management.
          </p>
        </div>
        <div className="flex mt-10">
          <div>
            <button className="bg-red-300 m-4 p-3 text-white">
              Find my doctor
            </button>
          </div>
          <div>
            <button className="bg-red-300 m-4 p-3 text-white">
              Create account
            </button>
          </div>
        </div>
      </div>

      <div className="bg-orange-200 mt-3">
        <h1 className="text-4xl text-center p-8"> What we Care for...</h1>
        <p className="text-xl text-white text-center">
          Schedule visits with a board-certified doctor for preventive wellness
          screenings and routine care for non-urgent medical concerns, and
          ongoing care for conditions like type 2 diabetes, asthma, and high
          blood pressure. You can see the same doctor for each appointment so
          your doctor can get to know you and your health and wellness needs.
        </p>
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

export default Primary;
