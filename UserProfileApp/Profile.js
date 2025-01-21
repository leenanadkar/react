// src/components/Profile.js
import { useState } from "react";

function Profile({ name, age, profession }) {
  const [available, setAvailable] = useState(true);

  const toggleAvailability = () => {
    setAvailable(!available);
  };

  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
      <p>
        Status:{" "}
        <span style={{ color: available ? "green" : "red" }}>
          {available ? "Available" : "Unavailable"}
        </span>
      </p>
      <button onClick={toggleAvailability} style={styles.button}>
        Toggle Availability
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "20px",
    margin: "10px auto",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Profile;
