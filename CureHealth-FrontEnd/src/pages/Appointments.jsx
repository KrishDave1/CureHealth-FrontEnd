import React, { useEffect, useState } from "react";
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
  async function getDoc() {
    const toSearch = disease;
    for (var i = 0; i < docTypes.length; i++) {
      for (let key in docTypes[i]) {
        if (docTypes[i][key].indexOf(toSearch) != -1) {
          setSpecial(key);
        }
      }
    }
    const res = await fetch(
      `http://127.0.0.1:8000/data/doctors/?specialization=${special.toString()}`
    );
    const data = await res.json();
    setDoctypes(data);
    console.log(data);
    setSpecial("");
    // setDisease("");
  }
  useEffect(() => {
    getDoc();
  }, [special]);

  return (
    <div>
      <h1>Appointments</h1>
      <form>
        <input
          type="text"
          value={disease}
          placeholder="What is your disease/problem"
          onChange={(e) => setDisease(e.target.value)}
        />
        <button onClick={getDoc}>Fetch for doctors</button>
        <button
          onClick={() => {
            const bool = window.confirm(
              "Are you sure you want to book an appointment?"
            );
            if (bool) {
              navigate("/video");
            }
          }}
        >
          Submit
        </button>
      </form>
      <div>
        <p>You Should show to a :{special}</p>
        <h2>We have the following doctors available</h2>

        <div>
          {data.map((doc) => (
            <div key={doc.id}>
              <p>{doc.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
