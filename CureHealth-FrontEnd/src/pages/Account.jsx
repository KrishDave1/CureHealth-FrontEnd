import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Account = () => {
  const {
    userId,
    username,
    email,
    phone_number,
    gender,
    bloodgroup,
    disease,
    about,
    specialization,
    isFree,
  } = useGlobalContext();
  async function onOption() {
    const confirmation = window.confirm("Are you sure?");
    if (!confirmation) {
      return;
    }
    const response = await fetch(
      `http://127.0.0.1:8000/data/doctors/?specialization=${specialization}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: userId,
          username: username,
          email: email,
          phone_number: phone_number,
          specialization: specialization,
          about: about,
          is_Free: true,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Manage Account</h1>
      <ul className="list-disc flex flex-col p-6">
        <li>Username : {username}</li>
        <li>Email: {email}</li>
        <li>Phone: {phone_number.slice(3)}</li>
        <li>Gender: {gender ? gender : "Not Available"}</li>
        <li>Blood Group: {bloodgroup ? bloodgroup : "Not Available"}</li>
        <li>Disease: {disease ? disease : "Not Available"}</li>
        <li>About: {about ? about : "Not Available"}</li>
        <li>
          Specialization: {specialization ? specialization : "Not Available"}
        </li>
        <li>Is Free: {isFree ? "Yes" : "No"}</li>
        {isFree ? (
          <div></div>
        ) : (
          <button onClick={onOption}>Are you free</button>
        )}
      </ul>
    </div>
  );
};

export default Account;
