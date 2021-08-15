import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoginEmailPassword } from "../actions/auth";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };
  return (
    <div className="loginScreen">
      <form className="formLogin" onSubmit={handleSubmit} autocomplete="off">
        <h1>Log in</h1>

        <input
          type="email"
          name=""
          required
          autofocus
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />

        <input
          type="password"
          name=""
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit">Iniciar</button>
        <button type="button">Registrarte</button>
      </form>
    </div>
  );
};
