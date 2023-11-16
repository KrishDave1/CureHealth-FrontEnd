import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Account = () => {
  const { userId } = useGlobalContext();
  const [bloodgroup, setBloodgroup] = useState("");
  const [gender, setGender] = useState("");
  const [disease, setDisease] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone_number, setPhone_number] = useState("");

   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch(
           `http://127.0.0.1:8000/data/patients/?id=${userId}`
         );
         const data = await response.json();
         return data;
       } catch (error) {
         console.error(error);
       }
     };

     const loadData = async () => {
       const result = await fetchData();
       if (result) {
         setBloodgroup(result.blood_Group);
         setGender(result.gender);
         setDisease(result.disease);
         setEmail(result.patient_As_NewUser[0].email);
         setUsername(result.patient_As_NewUser[0].username);
         setPhone_number(result.patient_As_NewUser[0].phone_number);
       }
     };

     loadData();
   }, [userId]);
  
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
