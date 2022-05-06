export enum AuthActionTypes {
  REGISTER = "REGISTER",
  LOGIN = "LOGIN",
}

export interface IAuth {
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
}

export interface IRegisterPayload {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginPayload {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface IRegisterAction {
  type: AuthActionTypes.REGISTER;
  payload: IRegisterPayload;
}

export interface ILoginAction {
  type: AuthActionTypes.LOGIN;
  payload: ILoginPayload;
}

export type AuthActions = IRegisterAction | ILoginAction;
