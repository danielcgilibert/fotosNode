import { types } from "../types/types";

export const login = (uid, displayName, photo=null) => {
    console.log(photo);
    return{
      type: types.login,
      payload: {
        uid,
        displayName,
        photo
      },
    }
  };