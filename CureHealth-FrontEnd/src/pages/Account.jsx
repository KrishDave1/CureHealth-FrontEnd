import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Account = () => {
  const { username, email, phone_number, gender, bloodgroup, disease } = useGlobalContext();
  
  return (
    <div>
      <h1>Manage Account</h1>
      <ul className="list-disc flex flex-col p-6">
        <li>Username : {username}</li>
        <li>Email: {email}</li>
        <li>Phone: { phone_number.slice(3) }</li>
        <li>Gender: { gender }</li>
        <li>Blood Group: { bloodgroup }</li>
        <li>Disease: { disease }</li>
      </ul>
    </div>
  );
};

export default Account;
