/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    const location= useLocation();
   
    return (
      <div className="flex justify-center items-center">
        <progress
          className="progress progress-info w-56"
          value="40"
          max="100"
        ></progress>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true} state={{from: location}}/>;
};

export default PrivateRoute;
