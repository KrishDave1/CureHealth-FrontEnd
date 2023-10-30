import React from "react";
import { useState } from "react";

const Review = ({ name, description, rating, url }) => {
  const [read, setRead] = useState(false);

  const info = read
    ? description
    : description.split(" ").slice(0, 35).join(" ") + "...";

  return (
    <div className="h-96 bg-blue-200 m-5">
      <div className="flex flex-col p-5">
        <img className="w-16 h-16 rounded-full" src={url} alt="person image" />

        <p className="text-md font-light mt-4">{info}</p>
        <button onClick={() => setRead(!read)}>
          {read ? "Read Less" : "Read More"}
        </button>
        <p className="text-lg font-light mt-3">~{name}</p>
        {rating == 4 ? <p>⭐️⭐️⭐️⭐️</p> : <p>⭐️⭐️⭐️⭐️⭐️</p>}
      </div>
    </div>
  );
};

export default Review;
