import { combineReducers } from "redux";

import userReducer from "./reducers/User";

export default combineReducers({
  user: userReducer
});
