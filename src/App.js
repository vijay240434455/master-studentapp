import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Master from "./Master";
import Signup from "./Signup";
import Student from "./Student";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/student" element={<Student />} />
      <Route path="/master" element={<Master />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Routers />
    </Router>
  );
}

export default App;
