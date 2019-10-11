import { Types } from "../actions/Types";
import { addItemToCart } from "../utils/Cart";

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case Types.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
