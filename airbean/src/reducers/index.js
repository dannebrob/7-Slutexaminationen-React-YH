import orderReducer from "./orderReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cart: orderReducer,
});

export default allReducers;
