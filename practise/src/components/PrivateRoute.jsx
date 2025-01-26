import React from "react";
import { Route, Redirect } from "react-router-dom";

// PrivateRoute component to handle route protection
const PrivateRoute = ({ component: Component, allowedRole, ...rest }) => {
  const userRole = localStorage.getItem("role"); // Retrieve role from localStorage

  return (
    <Route
      {...rest}
      render={(props) => {
        // If role matches, render the component
        if (userRole === allowedRole) {
          return <Component {...props} />;
        } else {
          // If not, redirect to login
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
