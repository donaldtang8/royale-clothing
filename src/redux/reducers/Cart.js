import { Types } from "../actions/Types";

const initialState = {
  hidden: false
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
