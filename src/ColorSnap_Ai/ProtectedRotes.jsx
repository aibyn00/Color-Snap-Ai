import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import ThemeContext from "./ThemeContext";

function ProtectedRoutes({ children }) {
  const { isAc } = useContext(ThemeContext);
  const location = useLocation();

  if (!isAc) {
    if (location.pathname === "/colorai") {
      alert("Color Ai - бетіне өту үшін тіркеліңіз!");
    }
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoutes;

