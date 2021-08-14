import { types } from "../types/types";




export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    
  
  };
};


export const login = (id, nombre) => {
    return{
      type: types.login,
      payload: {
        id,
        nombre
      },
    }
  };