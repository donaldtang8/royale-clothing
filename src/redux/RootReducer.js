import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
// local storage option
import storage from "redux-persist/lib/storage";
// session storage option
//import sessionStorage from "redux-persist/lib/storage";

import userReducer from "./reducers/User";
import cartReducer from "./reducers/Cart";
import directoryReducer from "./reducers/Directory";
import shopReducer from "./reducers/Shop";

// configure all possible JSON configurations that will be used in storage
const persistConfig = {
  key: "root",
  storage,
  // whitelist an array of all reducers we want to persist - since firebase already handles user we don't need to worry about that
  whitelist: ["cart"]
};

const RootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, RootReducer);
