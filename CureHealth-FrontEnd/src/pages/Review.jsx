import React from "react";
import { useState } from "react";

const Review = ({ name, description, rating, url }) => {
  const [read, setRead] = useState(false);

  const info = read
    ? description
    : description.split(" ").slice(0, 35).join(" ") + "...";

  return (
    <div
      className={`bg-blue-200 m-5 rounded-lg  ${
        read ? "h-[350px]" : "h-[290px]"
      } p-5`}
    >
      <div className="flex flex-col justify-evenly">
        <div className="flex justify-evenly items-center">
          {" "}
          <img
            className="w-16 h-16 rounded-full"
            src={url}
            alt="person image"
          />
          {rating == 4 ? (
            <p className="text-xl">⭐️⭐️⭐️⭐️</p>
          ) : (
            <p className="text-xl">⭐️⭐️⭐️⭐️⭐️</p>
          )}
        </div>
        <div>
          {" "}
          <p className="text-md font-light mt-4">{info}</p>
          <button onClick={() => setRead(!read)}>
            {read ? "Read Less" : "Read More"}
          </button>
        </div>
        <div>
          <p className="text-lg font-light mt-3">~{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
