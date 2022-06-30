import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectErrorMessage, selectUser } from "../redux/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { loginApi, useLogin1Mutation } from "../redux/slices/loginApi";
function Login(props) {
  const [usename, setUseName] = useState();
  const [password, setPassword] = useState();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const mess = useSelector(selectErrorMessage);
  const user = useSelector(selectUser);

  const [login1, { isSuccess, error }] = useLogin1Mutation();
  const handleName = (e) => {
    setUseName(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let fag = true;
    if (usename === undefined && password === undefined) {
      fag = false;
    }

    if (fag) {
      // dispatch(login({ email: usename, password: password }));
      login1({ email: usename, password: password });
    }
  };
  if (isSuccess) {
    nav("/dashboard");
  }
  //user = true la da dang nhap thanh cong
  // if (user) {
  //   nav("/dashboard");
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error.data.message}</p>}
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
