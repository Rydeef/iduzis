import { all, fork } from "redux-saga/effects";
import auth from "./pages/Auth/AuthSaga";

const rootSaga = function* root() {
  yield all([fork(auth)]);
};

export default rootSaga;
