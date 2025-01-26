import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ role, component }) => {
  const storedRole = localStorage.getItem("role");

  // Allow access only if the role matches
  if (storedRole === role) {
    return component;
  }

  // Redirect to login if role doesn't match or not logged in
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;


