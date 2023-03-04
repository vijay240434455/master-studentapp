import React, { useState, useEffect } from "react";
import "./student.css";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem("activities"));
    if (storedActivities) {
      setActivities(storedActivities);
    }
  }, []);

  const handleClearActivities = () => {
    setActivities([]);
    localStorage.removeItem("activities");
  };

  const handleLogout = () => {
    navigate("/");
  };

  const filteredActivities = activities.filter((activity) => activity !== null);

  return (
    <div className="student-container">
      <h1>Student</h1>
      <h2>Activity Log</h2>
      <ul>
        {filteredActivities.map((activity, index) => (
          <li
            key={index}
          >{`${activity.left} ${activity.operator} ${activity.right} = ${activity.result}`}</li>
        ))}
      </ul>
      <div className="button-container">
        <button onClick={() => handleClearActivities()}>
          Clear Activities
        </button>
      </div>
      <div className="button-container">
        <button onClick={() => handleLogout()}>Logout</button>
      </div>
    </div>
  );
};

export default Student;
