import { types } from "../types/types";
import { fetchSinToken } from "../helpers/authApi";

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    console.log(email, password);

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

      console.log(body);
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

export const login = (datosUsuario) => {
  return {
    type: types.login,
    payload: datosUsuario,
  };
};
