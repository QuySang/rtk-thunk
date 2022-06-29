import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectUsername, updateUsername } from "../redux/slices/loginSlice";
import { useSelector, useDispatch } from "react-redux";
function Login(props) {
  const [usename, setUseName] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();
  console.log(updateUsername());
  const xx = useSelector((state) => {
    console.log(state);
  });

  const handleName = (e) => {
    setUseName(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let fag = true;
    if (usename === undefined) {
      fag = false;
    }
    if (password === undefined) {
      fag = false;
    }
    if (fag) {
      dispatch(
        updateUsername({
          username: usename,
          password: password,
        })
      );
      nav("/dashboard");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        name="username"
        type="text"
        placeholder="Username"
        value={usename}
        onChange={handleName}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePass}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
