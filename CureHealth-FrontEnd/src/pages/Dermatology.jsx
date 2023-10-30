import React from "react";
import Accordian from "../components/Accordian";

const Questions = [
  {
    question:
      "What conditions can be treated through a dermatology appointment?",
    answer:
      "Curehealth dermatologists are trained to diagnose and treat over 3,000 medical conditions affecting the skin, hair, and nails. Some of the most commonly treated conditions include but are not limited to acne, dermatitis, eczema, folliculitis, psoriasis, rosacea, and more.",
  },
  {
    question: "Can I choose my Dermatologist?",
    answer:
      'Yes. You may select any dermatologist in our network who is licensed to practice in your state. If you are currently seeing a dermatologist and they are in our network, you may select that doctor — or pick someone new. If you choose "no preference," you will be treated by the next available dermatologist licensed to practice in your state.',
  },
  {
    question: "When is CureHealth Dermatology available?",
    answer:
      "Dermatology is available 24 hours a day, 7 days a week, 365 days a year, even on holidays. Dermatology is a convenient alternative to commuting to a dermatologist's office and helps avoid a lengthy wait for an in-office appointment.",
  },
  {
    question: "Who can use CureHealth Dermatology care?",
    answer:
      "Adults and minors under the age of 18 can be seen with parent or guardian consent.Please note that pregnant or nursing mothers, or those trying to become pregnant, are not permitted to conduct a dermatology appointment. Dermatology services are not to be used in the event of an emergency. ",
  },
];

const Dermatology = () => {
  return (
    <>
      <div className='bg-white mt-2'>
        <h1 className='text-4xl text-center p-6'> What we Care for...</h1>

        <div className='flex w-full'>
          <div className="w-1/3">
            {" "}
            <img
              src='derma.jpg'
              alt='mental'
              className='w-full h-96 m-4 rounded-lg'
            />
          </div>

          <div className='w-2/3 mx-8'>
            <p className='text-2xl p-4 ml-8 font-medium '>
              From suspicious spots and rashes to cold sores and fungal
              infections, MDLIVE board-certified dermatologists deliver reliable
              care for thousands of skin, hair, and nail conditions, including:
            </p>
            <ul className='text-2xl ml-8  p-3 pb-5 list-disc font-light '>
              <li>Acne</li>
              <li>Boils</li>
              <li>Cysts</li>
              <li>Dermatitis</li>
              <li>Warts</li>
              <li>Fungal skin infection</li>
              <li>Hives</li>
            </ul>
            <div className="flex justify-center text-xl">
              <button className='bg-red-300 p-3 text-white rounded-lg hover:bg-red-500'>
                Get Treated
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <h1 className='text-center text-3xl'>
          Benefits of CureHealth Dermatology.
        </h1>
        <p className='text-center text-xl p-5'>
          90% of patients resolve their condition after one consultation.
        </p>

        <div className='flex '>
          <div className='w-1/4 flex flex-col items-center p-4'>
            <img src='./images/watch.svg' alt='watch' className='h-48' />
            <h2 className='text-center'>Save Time</h2>
            <p>
              You will receive a diagnosis and treatment plan within 72 hours
              (usually within 24 hours).
            </p>
          </div>
          <div className='w-1/4 flex flex-col items-center p-4'>
            <img src='./images/phone.svg' alt='watch' className='h-48' />
            <h2 className='text-center'>Access to a nationwide network.</h2>
            <p>
              You can choose your dermatologist from a list of board-certified
              doctors licensed in your state.
            </p>
          </div>
          <div className='w-1/4 flex flex-col items-center p-4'>
            <img
              src='./images/calender.svg'
              alt='watch'
              className='w-48 h-48'
            />
            <h2 className='text-center'>Prescriptions available</h2>
            <p>
              When appropriate, your dermatologist can easily send a
              prescription to the pharmacy of your choice.
            </p>
          </div>
          <div className='w-1/4 flex flex-col items-center p-4'>
            <img
              src='./images/medicine.svg'
              alt='watch'
              className='w-48 h-48'
            />
            <h2 className='text-center'>Skip the commute</h2>
            <p>
              There is no appointment required. Simply answer questions about
              your condition and upload photos to your CureHealth account.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <h1 className='text-center text-3xl'>
          How CureHealth Dermatology works?
        </h1>
        <p className='text-xl p-4 font-light'>
          Dermatologists can care for most common skin, hair, and nail issues by
          seeing photos and a description of the condition. You will answer a
          few basic questions, provide a brief medical history, describe your
          symptoms, and upload photos of the condition you are seeking treatment
          for. Within 72 hours and usually within 24 hours you are notified of
          your diagnosis and treatment plan from a board-certified
          dermatologist. Prescriptions, if appropriate, will be sent to your
          preferred pharmacy.
        </p>
        {/* <br /> */}
        <p className='text-xl p-4 font-light'>
          In addition, you may submit a message to your dermatologist for up to
          30 days after your appointment through the portal if you have an
          additional question or comment at no additional cost.
        </p>
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

export default Dermatology;
