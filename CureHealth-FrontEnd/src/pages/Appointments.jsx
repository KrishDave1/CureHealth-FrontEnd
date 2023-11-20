import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const docTypes = [
  { CARDIOLOGIST: ["heart pain", "heart problems"] },
  { DERMATOLOGIST: ["skin problems", "skin disease"] },
  { GYNECOLOGIST: ["Menstruation problems"] },
  { NEUROLOGIST: ["neural care", "brain tumour"] },
  { OPHTHALMOLOGIST: ["Myopia", "Hyperopia", "conjuctivitis"] },
  { ENT: ["fever", "ear pain", "ear drum damage", "nose issues"] },
  { PSYCHIATRIST: ["Mental issues", "sucidal thoughts"] },
  { ENDOCRINOLOGIST: ["urinal pain", "kidney stone"] },
];

const Appointments = () => {
  const navigate = useNavigate();
  const [disease, setDisease] = useState("");
  const [special, setSpecial] = useState("");
  const [data, setDoctypes] = useState([]);
  const [fetch1, setFetch] = useState(false);
  const [fetch2, setFetch2] = useState(false);
  const { email } = useGlobalContext();
  const getDoc = useCallback(async () => {
    const toSearch = disease;
    for (var i = 0; i < docTypes.length; i++) {
      for (let key in docTypes[i]) {
        if (docTypes[i][key].indexOf(toSearch) !== -1) {
          setSpecial(key);
        }
      }
    }
  }, [disease]);
  useEffect(() => {
    getDoc();
  }, [getDoc]);
  const fetchData = useCallback(async () => {
    const res = await fetch(
      `http://127.0.0.1:8000/data/doctors/?specialization=${special}`
    );
    const data = await res.json();
    setDoctypes(data);
  }, [special]);

  useEffect(() => {
    if (special && fetch1) {
      fetchData();
      setFetch(false); // Reset fetch1 after fetching data
    }
  }, [special, fetch1, fetchData]);
  const patchData = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/data/doctors/?specialization=${special}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: data[0].id,
          is_superuser: data[0].is_superuser,
          password: data[0].password,
          username: data[0].username,
          email: data[0].email,
          phone_number: data[0].phone_number,
          specialization: data[0].specialization,
          is_email_verified: data[0].is_email_verified,
          is_phone_verified: data[0].is_phone_verified,
          about: data[0].about,
          is_Free: false,
          is_active: data[0].is_active,
          first_name: data[0].first_name,
          last_name: data[0].last_name,
        }),
      }
    );
    const data1 = await response.json();
    console.log(data1);
  };
  //function to generate random string
  function generateRandomString(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const random = generateRandomString(6);

  const PostDoc = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/email-sender/send-email/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject_Type: 2,
          email: email,

          video_Call_Link: `http://localhost:5173/video/`,
          room_ID: random,
        }),
      }
    );
    const data3 = await response.json();
    alert(data3.alert);
    console.log(data3);
  };
  const putDoc = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/email-sender/send-email/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject_Type: 3,
          email: data[0].email,

          video_Call_Link: `http://localhost:5173/video/`,
          room_ID: random,
        }),
      }
    );
    const data2 = await response.json();
    alert(data2.alert);
    console.log(data2);
  };
  useEffect(() => {
    putDoc();
  }, []);
  function handlesubmit(e) {
    e.preventDefault();
    setFetch(true);
    getDoc();
    setFetch2(true);
  }

  return (
    <div>
      <h1>Appointments</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={disease}
          placeholder="What is your disease/problem"
          onChange={(e) => setDisease(e.target.value)}
          className="p-2 shadow-lg w-full h-12"
        />
        <button
          type="submit"
          className="bg-red-300 m-4 p-3 rounded-xl w-1/3 text-white"
        >
          Fetch doctors
        </button>
        <button
          onClick={putDoc}
          className="bg-red-300 m-4 p-3 rounded-xl w-1/3 text-white"
        >
          Ask for appointment
        </button>
        <button
          onClick={PostDoc}
          className="bg-red-300 m-4 p-3 rounded-xl w-1/3 text-white"
        >
          {" "}
          Confirm appointment
        </button>
      </form>
      <div>
        {special && data.length > 0 ? (
          <div className="flex flex-col m-3 p-4">
            <p className="text-xl">
              You Should show to our speciallised : {special}
            </p>
            <h2>We have the following doctors available</h2>
            <p>Name: {data[0].username}</p>

            <p>Email: {data[0].email}</p>
            <p>About: {data[0].about}</p>
          </div>
        ) : (
          <div>
            <p>No doctor found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
