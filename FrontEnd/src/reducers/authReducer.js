import { types } from "../types/types";


const initialState = {
  checking: true,
  uid: null,
  email: null,
  name: null
}
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      console.log(action.payload);

  

    default:
      return state;
  }
};
