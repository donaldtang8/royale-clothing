import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/actions/Cart";
import { selectCartItemsCount } from "../../redux/selectors/Cart";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer
} from "./CartIconStyles";

const CartIcon = ({ toggleCartHidden, totalItems }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{totalItems}</ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  totalItems: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
