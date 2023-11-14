import React from "react";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Vidjoin = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleJoin = useCallback(() => {
    navigate(`/video/${value}`);
  }, [navigate, value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleJoin}>Join</button>
    </div>
  );
};

export default Vidjoin;
