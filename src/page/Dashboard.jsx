import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Dashboard(props) {
  const name = useSelector((state) => state.user.username);
  console.log(name);
  return (
    <>
      <h1>DashBoard</h1>
      <h2>WelCome Guest {name}</h2>
      <Link to="/login">Logout</Link>
    </>
  );
}

export default Dashboard;
