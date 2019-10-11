import { Types } from "../actions/Types";

const initialState = {
  currentUser: null
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      return state;
  }
};

export default userReducer;
