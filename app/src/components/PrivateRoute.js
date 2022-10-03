/* eslint-disable react/prop-types */
import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

function RequireAuth({ children, redirectTo }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default RequireAuth;
