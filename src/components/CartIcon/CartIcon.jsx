import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/actions/Cart";
import { selectCartItemsCount } from "../../redux/selectors/Cart";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "../../scss/CartIcon.scss";

const CartIcon = ({ toggleCartHidden, totalItems }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{totalItems}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  totalItems: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);