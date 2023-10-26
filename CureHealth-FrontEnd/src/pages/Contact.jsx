import React from "react";

const Contact = () => {
  return (
    <div className="">
      <form className="flex flex-col justify-center w-full ">
        <div className="p-6">
          <div>
            <label htmlFor="f" className="text-lg">
              First Name:
            </label>
          </div>
          <input
            type="text"
            name="name"
            id="f"
            className="w-64 rounded shadow-sm shadow-slate-400 p-2"
          />
        </div>
        <div className="p-6">
          <div>
            <label htmlFor="n" className="text-lg">
              Last Name:
            </label>
          </div>
          <input
            type="text"
            name="name"
            id="n"
            className="w-64 rounded shadow-sm shadow-slate-400 p-2"
          />
        </div>
        <div className="p-6">
          <div>
            <label htmlFor="e" className="text-lg">
              Email:
            </label>
          </div>
          <input
            type="text"
            name="name"
            id="e"
            className="w-64 rounded shadow-sm shadow-slate-400 p-2"
          />
        </div>
        <div className="p-6">
          <div>
            <label htmlFor="p" className="text-lg">
              Phone:
            </label>
          </div>
          <input
            type="text"
            name="name"
            id="p"
            className="w-64 rounded shadow-sm shadow-slate-400 p-2"
          />
        </div>
        <div className="p-6">
          <div>
            <label htmlFor="t" className="text-lg">
              Message:
            </label>
          </div>
          <textarea
            className="w-1/2 rounded shadow-sm shadow-slate-400 p-2"
            rows="10"
            cols="10"
            id="t"
          ></textarea>
        </div>
        <button className="bg-red-300 m-4 p-3 rounded-xl w-1/3 text-white">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
