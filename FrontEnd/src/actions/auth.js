import { types } from "../types/types";
import { fetchConToken, fetchSinToken } from "../helpers/authApi";

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchSinToken("auth/login", { email, password }, "POST");
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        login({
          uid: body.id,
          email: body.email,
          name: body.nombre,
        })
      );
    } else {
      console.log("usuario no valido");
    }
  };
};

export const startRegister = (email, password, name) => {
  return async (dispatch) => {
    const resp = await fetchSinToken(
      "auth/new",
      { email, password, name },
      "POST"
    );
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      //! Implementar una notificación para el usuario
      dispatch(
        login({
          uid: body.idUsuario,
          email: body.email,
          name: body.name,
        })
      );
    } else {
      console.log("Fallo en el registro");
    }
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchConToken("auth/renew");
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      console.log(body);
      //! Implementar una notificación para el usuario
      dispatch(
        login({
          uid: body.uid,
          email: body.email,
          name: body.name,
        })
      );
    } else {
      dispatch( checkingFinish() );

    }
  };
};

const checkingFinish = () => ({
  type: types.authCheckingFinish
}) 

export const login = (datosUsuario) => {
  console.log(datosUsuario);
  return {
    type: types.authLogin,
    payload: datosUsuario,
  };
};
