import { types } from "../types/types";
import { authLoginApi } from '../helpers/authApi'



export const startLoginEmailPassword = (email, password) => {
  return async(dispatch) => {
    console.log(email, password);

    const resp = await authLoginApi({email, password});
    const body = await resp.json();
    
    if( body.ok ){
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(login({
        uid: body.id,
        email: body.email,
        name: body.nombre
      }))

    }else{
      console.log(
        "usuario no valido"
      );
    }

    

    
  };
};





export const login = (datosUsuario) => {
    return{
      type: types.login,
      payload: datosUsuario,
    }
  };