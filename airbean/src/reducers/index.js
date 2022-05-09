import orderReduucer from "./orderReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  order: orderReduucer,
});

export default allReducers;
