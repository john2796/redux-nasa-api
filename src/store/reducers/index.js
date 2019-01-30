import { combineReducers } from "redux";
import nasaReducer from "./nasaReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  nasa: nasaReducer,
  errors: errorReducer
});
