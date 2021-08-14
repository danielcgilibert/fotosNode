import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const LoginScreen = () => {
  const [loginDatos, setLoginDatos] = useState({email: "",password: ""});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(startLoginEmailPassword(email, password));

  };
  return (
    <div className="loginScreen">
      <form className="formLogin" onSubmit={handleSubmit}>
        <div className="user-box">
          <label>Username</label>
          <input type="email" name="" required onChange={(e) => setLoginDatos({...loginDatos,email: e.target.value})} />
        </div>

        <div className="user-box">
          <label>Password</label>
          <input type="password" name="" required onChange={(e) => setLoginDatos({...loginDatos,password: e.target.value})}/>
          <button type="submit">Iniciar</button>
        </div>
      </form>
    </div>
  );
};
