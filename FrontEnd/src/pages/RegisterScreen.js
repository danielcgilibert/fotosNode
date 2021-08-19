import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startRegister } from "../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [datosRegistro, setDatosRegistro] = useState({
    name: "",
    email: "",
    password1: "",
    password2: ""
  });
  const { name, email, password1, password2 } = datosRegistro;
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password1 !== password2){
        console.log("Las contraseñas no son iguales");
    }
    dispatch(startRegister(email, password1, name));
  };

  return (
    <div className="loginScreen">
      <form className="formLogin" onSubmit={handleSubmit}>
        <h1>Register</h1>

        <input
          type="text"
          name="rName"
          value={name}
          required
          autofocus
          placeholder="Nombre"
          onChange={(e) =>
            setDatosRegistro({ ...datosRegistro, name: e.target.value })
          }
        />

        <input
          type="email"
          name="rEmail"
          value={email}
          required
          autofocus
          placeholder="Escriba su email"
          onChange={(e) =>
            setDatosRegistro({ ...datosRegistro, email: e.target.value })
          }
        />

        <input
          type="password"
          name="rPassword1"
          value={password1}
          required
          placeholder="Escriba su contraseña"
          onChange={(e) =>
            setDatosRegistro({ ...datosRegistro, password1: e.target.value })
          }
        />

        <input
          type="password"
          name="rPassword2"
          value={password2}
          required
          placeholder="Repita la contraseña"
          onChange={(e) =>
            setDatosRegistro({ ...datosRegistro, password2: e.target.value })
          }
        />
        <button type="submit">Registrarte</button>
      <Link to="/auth/login" >
        <button type="button">Volver</button>
        </Link>
      </form>
    </div>
  );
};
