import React from "react";
import { useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Accordian = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);
  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="m-3 text-xl list-disc ">
      <h3 className="p-3">
        {question}{" "}
        <button onClick={toggleState}>
          {toggle ? (
            <AiFillMinusCircle style={{ color: "red" }} />
          ) : (
            <AiFillPlusCircle />
          )}
        </button>
      </h3>
      {toggle ? <p className="p-3">{answer}</p> : ""}
      <hr />
    </div>
  );
};

export default Accordian;
