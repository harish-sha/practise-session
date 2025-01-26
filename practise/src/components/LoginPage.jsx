import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock login logic
    if (username === "user" && password === "user") {
      localStorage.setItem("role", "user");
      navigate("/user");
    } else if (username === "admin" && password === "admin") {
      localStorage.setItem("role", "admin");
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-header">Login</h1>
        <div className="input-container">
          <label className="input-label">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label className="input-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="input-field"
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const navigate = useNavigate();

//   // State to manage inputs
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   // Redirect logged-in users
//   useEffect(() => {
//     const role = localStorage.getItem("role");
//     if (role === "user") {
//       navigate("/user"); // Redirect user to user dashboard
//     } else if (role === "admin") {
//       navigate("/admin"); // Redirect admin to admin dashboard
//     }
//   }, [navigate]);

//   // Handle login
//   const handleLogin = () => {
//     if (username === "user" && password === "user") {
//       localStorage.setItem("role", "user");
//       navigate("/user"); // Redirect user
//     } else if (username === "admin" && password === "admin") {
//       localStorage.setItem("role", "admin");
//       navigate("/admin"); // Redirect admin
//     } else {
//       alert("Invalid credentials! Please try again.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h1 className="login-header">Login</h1>
//         <div className="input-container">
//           <label className="input-label">Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter your username"
//             className="input-field"
//           />
//         </div>
//         <div className="input-container">
//           <label className="input-label">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             className="input-field"
//           />
//         </div>
//         <button className="login-button" onClick={handleLogin}>
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
