// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Mock login logic
//     if (username === "user" && password === "password") {
//       localStorage.setItem("role", "user");
//       navigate("/user");
//     } else if (username === "admin" && password === "admin") {
//       localStorage.setItem("role", "admin");
//       navigate("/admin");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br />
//       <input
//         type="text"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  // State to manage inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Redirect logged-in users
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "user") {
      navigate("/user"); // Redirect user to user dashboard
    } else if (role === "admin") {
      navigate("/admin"); // Redirect admin to admin dashboard
    }
  }, [navigate]);

  // Handle login
  const handleLogin = () => {
    if (username === "user" && password === "user") {
      localStorage.setItem("role", "user");
      navigate("/user"); // Redirect user
    } else if (username === "admin" && password === "admin") {
      localStorage.setItem("role", "admin");
      navigate("/admin"); // Redirect admin
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
