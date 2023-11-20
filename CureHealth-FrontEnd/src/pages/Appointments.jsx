import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  function handlesubmit(e) {
    e.preventDefault();
    setFetch(true);

    getDoc();
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
        />
        <button type="submit">Fetch for doctors</button>
        <button
          onClick={() => {
            const bool = window.confirm(
              "Are you sure you want to book an appointment?"
            );
            if (bool) {
              patchData();
            }
          }}
        >
          Submit
        </button>
      </form>
      <div>
        {special && data.length > 0 ? (
          <div className="flex flex-col">
            <p>You Should show to our speciallised : {special}</p>
            <h2>We have the following doctors available</h2>
            <p>Name: {data[0].username}</p>

            <p>Email: {data[0].email}</p>
            <p>About:{data[0].about}</p>
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
