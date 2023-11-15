import React from "react";
import { useNavigate } from "react-router-dom";

const Chatlogin = () => {
     const navigate=useNavigate();
  return (
    <div>
      <input type="text" placeholder="enter username"/>
      <button onClick={()=>navigate("/chatroom")}>Go to chatroom</button>
    </div>
  );
};

export default Chatlogin;
