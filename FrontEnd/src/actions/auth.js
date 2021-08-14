import { types } from "../types/types";

export const login = (id, nombre) => {
    return{
      type: types.login,
      payload: {
        id,
        nombre
      },
    }
  };