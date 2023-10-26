import React from "react";
import { useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Accordian = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);
  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="text-center m-3 ">
      <h3 className="text-center p-3">
        {question}{" "}
        <button onClick={toggleState}>
          {toggle ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
        </button>
      </h3>
      {toggle ? <p className="text-center p-3">{answer}</p> : ""}
      <hr />
    </div>
  );
};

export default Accordian;
