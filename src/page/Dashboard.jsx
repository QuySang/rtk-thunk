import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../redux/slices/loginSlice";
import { useGetUserQuery } from "../redux/slices/loginApi";
function Dashboard(props) {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const user = useSelector(selectUser);
  const { ...x } = useGetUserQuery();
  // console.log(x);
  useEffect(() => {
    if (user === null) {
      return nav("/login");
    }
  }, []);
  return (
    <>
      <h1>DashBoard</h1>
      <h2>WelCome Guest </h2>
      <Link to="/login" onClick={() => dispatch(logout())}>
        Logout
      </Link>
    </>
  );
}

export default Dashboard;
