import React from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Clear session
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome Admin</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminPage;
