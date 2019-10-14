import { Types } from "../actions/Types";

const initialState = {
  collections: null,
  isFetching: false,
  error: undefined
};

const shopReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case Types.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: payload
      };
    case Types.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    default:
      return state;
  }
};

export default shopReducer;
