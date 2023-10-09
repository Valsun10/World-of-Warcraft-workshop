import React from "react";
import { useAuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";

const RequireGuest = ({ children }) => {
  const { user } = useAuthContext();

  if (user.accessToken !== "") {
    return <Navigate to="/" />;
  }

  return children;
};

export default RequireGuest;
