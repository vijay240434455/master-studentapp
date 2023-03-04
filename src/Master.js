import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Master = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    // perform the calculation using eval
    const result = eval(input);
    setOutput(result);

    const [left, operator = "", right = ""] = input.split(" ");
    const activity = { left, operator, right, result };
    const activities = JSON.parse(localStorage.getItem("activities")) || [];
    localStorage.setItem(
      "activities",
      JSON.stringify([...activities, activity])
    );
  };

  const handleLogout = () => {
    navigate("/");
  };

  const zero = (operation) => {
    if (!operation) return 0;
    return operation(0);
  };

  const one = (operation) => {
    if (!operation) return 1;
    return operation(1);
  };

  const two = (operation) => {
    if (!operation) return 2;
    return operation(2);
  };

  const three = (operation) => {
    if (!operation) return 3;
    return operation(3);
  };

  const four = (operation) => {
    if (!operation) return 4;
    return operation(4);
  };

  const five = (operation) => {
    if (!operation) return 5;
    return operation(5);
  };

  const six = (operation) => {
    if (!operation) return 6;
    return operation(6);
  };

  const seven = (operation) => {
    if (!operation) return 7;
    return operation(7);
  };

  const eight = (operation) => {
    if (!operation) return 8;
    return operation(8);
  };

  const nine = (operation) => {
    if (!operation) return 9;
    return operation(9);
  };

  const plus = (a) => {
    return (b) => a + b;
  };

  const minus = (a) => {
    return (b) => a - b;
  };

  const times = (a) => {
    return (b) => a * b;
  };

  const divided_by = (a) => {
    return (b) => Math.floor(b / a);
  };

  return (
    <div>
      <h1>Master</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
      <p>Result: {output}</p>
      <div className="button-container">
        <button onClick={() => handleLogout()}>Logout</button>
      </div>
    </div>
  );
};

export default Master;
