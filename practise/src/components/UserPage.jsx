import React from "react";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Clear session
    navigate("/login");
  };

  return (
    <div className="container" >
      <h2>Welcome User</h2>
      <button className="btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserPage;
