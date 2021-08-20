import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

export const NavBar = () => {

  const dispatch = useDispatch()
  const handleLogout = () => {
      dispatch(startLogout());
  }
  return (
    <header>
      <img
        className="logo"
        src="https://cdn.iconscout.com/icon/free/png-256/camera-2377-675185.png"
        alt="logo"
      />
      <nav className="navBar">
        <ul className="navBar_links">
          <li>
            <a href=""> Inicio </a>
          </li>
          <li>
            <a href=""> Perfil</a>
          </li>
          <li>
            <a href=""> Test </a>
          </li>
        </ul>
      </nav>

      <button onClick={ handleLogout }> Logout </button>
    </header>
  );
};
