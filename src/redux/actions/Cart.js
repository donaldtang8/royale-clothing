import { Types } from "./Types";

export const toggleCartHidden = () => ({
  type: Types.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: Types.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: Types.REMOVE_ITEM,
  payload: item
});

export const removeCartItem = item => ({
  type: Types.REMOVE_CART_ITEM,
  payload: item
});
