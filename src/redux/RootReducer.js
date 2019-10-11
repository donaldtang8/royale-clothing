import { combineReducers } from "redux";

import userReducer from "./reducers/User";
import cartReducer from "./reducers/Cart";

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
