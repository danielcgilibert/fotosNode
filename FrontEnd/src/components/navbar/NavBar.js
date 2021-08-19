import React from "react";

export const NavBar = () => {
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
      <div class="dropdown">
        <span>Mouse over me</span>
        <div class="dropdown-content">
          <p>Hello World!</p>
        </div>
      </div>
    </header>
  );
};
