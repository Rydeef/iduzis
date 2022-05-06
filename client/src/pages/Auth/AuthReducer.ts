import { IAuth, AuthActions } from "./AuthActions";


const initialState: IAuth = {};

const auth = (state = initialState, action: AuthActions):IAuth  => {
  switch (action.type) {
    default:
      return state;
  }
};

export default auth;
