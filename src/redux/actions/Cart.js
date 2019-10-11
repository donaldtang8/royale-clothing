import { Types } from "./Types";

export const toggleCartHidden = () => ({
  type: Types.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: Types.ADD_ITEM,
  payload: item
});
