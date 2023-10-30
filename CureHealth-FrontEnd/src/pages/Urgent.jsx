import React from "react";

const Urgent = () => {
  return (
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
            <button className="bg-red-300 m-4 p-3 text-white rounded-lg hover:bg-red-500 ease-linear duration-300">
              I need care
            </button>
          </div>
          <div>
            <button className="bg-red-300 m-4 p-3 text-white rounded-lg hover:bg-red-500 ease-linear duration-300">
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
  );
};

export default Urgent;
