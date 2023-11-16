import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Account = () => {
  const { userId } = useGlobalContext();
  const [data_1, setData_1] = useState({});
  useEffect(
    function () {
      let fetchData = async () => {
        try {
          let response = await fetch(
            `http://127.0.0.1:8000/data/patients/?id=${userId}`
          );
          let data = await response.json();
          console.log(data); // Here, you can handle or further process the data
          return data; // Optionally, you can return the data for further use
        } catch (error) {
          console.error(error);
        }
      };

      // Usage
      fetchData().then((data) => {
        console.log(data[0]);
        setData_1(data[0]);
      });
    },
    [userId]
  );

  return (
    <div>
      <h1>Manage Account</h1>

      <ul className="list-disc flex flex-col p-6">
        {/* <li>Email Id: {data.PromiseResult[0].email}</li> */}
        <li>Email: {data_1.email}</li>
        <li>Username: {data_1.username}</li>
        <li>Phone: {data_1.phone_number.slice(3)}</li>
      </ul>
    </div>
  );
};

export default Account;
