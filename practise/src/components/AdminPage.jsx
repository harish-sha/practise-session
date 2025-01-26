import React from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Clear session
    navigate("/login");
  };

  return (
    <div className="container" >
      <h2>Welcome Admin</h2>
      <button className="btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminPage;

// eyJhbGciOiJSUzI1NiIsImNhdCI6ImNsX0I3ZDRQRDExMUFBQSIsImtpZCI6Imluc18ycU9YUHBQZDhJVU00N3ZxOGtaS2xjcDhzWlQiLCJ0eXAiOiJKV1QifQ
// eyJhbGciOiJSUzI1NiIsImNhdCI6ImNsX0I3ZDRQRDExMUFBQSIsImtpZCI6Imluc18ycU9YUHBQZDhJVU00N3ZxOGtaS2xjcDhzWlQiLCJ0eXAiOiJKV1QifQ
