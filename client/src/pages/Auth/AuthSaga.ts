import { call, takeLatest, put } from "redux-saga/effects";
import { IRegisterAction, ILoginAction, AuthActionTypes } from "./AuthActions";
import { api } from "../../api";

function* registerUser(data: IRegisterAction): Generator {
  try {
  } catch (err: any) {}
}

function* loginUser(data: ILoginAction): Generator {
  try {
  } catch (err: any) {}
}

function* auth(): Generator {
  yield takeLatest(AuthActionTypes.REGISTER, registerUser);
  yield takeLatest(AuthActionTypes.LOGIN, loginUser);
}

export default auth;
