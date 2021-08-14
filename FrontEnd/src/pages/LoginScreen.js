import React from "react";

export const LoginScreen = () => {
  return (
    <div className="loginScreen">
      <form className="formLogin">
        <div class="user-box">
          <label>Username</label>
          <input type="text" name="" required="" />
        </div>

        <div class="user-box">
          <label>Password</label>
          <input type="password" name="" required="" />
          <button type="button">
            Iniciar
          </button>
        </div>
      </form>
    </div>
  );
};
