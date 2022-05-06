import { combineReducers } from "redux";
import auth from "./pages/Auth/AuthReducer";

const rootReducer = combineReducers({ auth });

export default rootReducer;
