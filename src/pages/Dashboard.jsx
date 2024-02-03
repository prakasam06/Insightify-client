import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./../context/JWTAuthContext";
const Dashboard = () => {
  const { signOut } = useAuth();
  return (
    <div>
      <span onClick={signOut}>Sigout</span>
      <Link to="/createForm">Create Form</Link>
    </div>
  );
};

export default Dashboard;
