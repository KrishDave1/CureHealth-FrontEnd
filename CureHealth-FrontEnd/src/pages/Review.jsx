import React from "react";

const Review = ({ name, description, rating, url }) => {
  return (
    <div className="flex flex-col p-5">
      <img className="w-16 h-16 rounded-full" src={url} alt="person image" />

      <p className="text-md font-light mt-4">{description}</p>
      <p className="text-lg font-light mt-3">~{name}</p>
      {rating == 4 ? <p>⭐️⭐️⭐️⭐️</p> : <p>⭐️⭐️⭐️⭐️⭐️</p>}
    </div>
  );
};

export default Review;
