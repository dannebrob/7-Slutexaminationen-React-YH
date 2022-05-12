import orderReducer from "./orderReducer";
import apiReducers from "./apiReducers";
import { combineReducers } from "redux";
import apiReducer from "./apiReducers";

const allReducers = combineReducers({
  cart: orderReducer,
  apiPost: apiReducers,
});

export default allReducers;
