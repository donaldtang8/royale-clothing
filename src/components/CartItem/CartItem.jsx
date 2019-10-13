import React from "react";

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  CartNameContainer
} from "./CartItemStyles";

const cartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt={name} />
    <ItemDetailsContainer className="item-details">
      <CartNameContainer>{name}</CartNameContainer>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default cartItem;
