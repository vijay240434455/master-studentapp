import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // import the CSS file

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    // Get the existing users from localStorage or create a new array if none exists
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user with the matching username and password
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      console.log(user);
      if (user.category === "student") {
        navigate("/student"); // Update to navigate to "/student" instead of "student"
      } else if (user.category === "master") {
        navigate("/master");
      }
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <>
      {!showSignup ? (
        <form onSubmit={handleLogin}>
          <h1>Please Login Here!</h1>
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
          <button type="submit">Log in</button>
          <br />
          <button type="button" onClick={handleSignupClick}>
            Sign Up
          </button>
        </form>
      ) : null}
    </>
  );
}

export default Login;
