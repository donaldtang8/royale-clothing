import { Types } from "../actions/Types";

const initialState = {
  collections: null
};

const shopReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload
      };
    default:
      return state;
  }
};

export default shopReducer;
