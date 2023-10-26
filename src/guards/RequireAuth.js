import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const RequireAuth = ({ children }) => {
  const { user } = useAuthContext();
  const token = localStorage.getItem("token");

  if (user.accessToken === "") {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

export default RequireAuth;
