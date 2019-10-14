import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./RootReducer";

const initialState = {};

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  initialState,
  //applyMiddleware(...middlewares)
  composeWithDevTools(applyMiddleware(...middlewares))
);

// create new persisted version of store for session store and export it
export const persistor = persistStore(store);

export default { store, persistor };
