import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Account = () => {
  const { username, email, phone_number, gender, bloodgroup, disease , about , specialization , isFree } = useGlobalContext();
  
  return (
    <div>
      <h1>Manage Account</h1>
      <ul className="list-disc flex flex-col p-6">
        <li>Username : {username}</li>
        <li>Email: {email}</li>
        <li>Phone: { phone_number.slice(3) }</li>
        <li>Gender: { gender ? gender : "Not Available"}</li>
        <li>Blood Group: { bloodgroup ? bloodgroup : "Not Available"}</li>
        <li>Disease: { disease ? disease : "Not Available"}</li>
        <li>About: { about ? about : "Not Available"}</li>
        <li>Specialization: { specialization ? specialization : "Not Available"}</li>
        <li>Is Free: { isFree ? "Yes" : "No"}</li>
      </ul>
    </div>
  );
};

export default Account;
