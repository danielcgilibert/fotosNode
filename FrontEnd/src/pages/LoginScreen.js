import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoginEmailPassword } from "../actions/auth";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(startLoginEmailPassword(email, password));

  };
  return (
    <div className="loginScreen">
      <form className="formLogin" onSubmit={handleSubmit}>
        <div className="user-box">
          <label>Username</label>
          <input type="email" name="" required onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="user-box">
          <label>Password</label>
          <input type="password" name="" required onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit">Iniciar</button>
        </div>
      </form>
    </div>
  );
};
