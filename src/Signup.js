import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("student");
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    // Get the existing users from localStorage or create a new array if none exists
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the username already exists
    if (users.find((user) => user.username === username)) {
      alert("Username already exists. Please choose another username.");
      return;
    } else {
      users.push({ username, password, category });
      localStorage.setItem("users", JSON.stringify(users));
      setIsSignUpSuccessful(true);
      alert("Sign up successful!");
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h1>Please SignUp Here!</h1>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="student">Student</option>
          <option value="master">Master</option>
        </select>
      </label>
      <br />
      <button type="submit">Sign up</button>
    </form>
  );
}

export default Signup;
