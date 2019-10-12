import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/selectors/Cart";
import { toggleCartHidden } from "../../redux/actions/Cart";
import "../../scss/CartDropdown.scss";

// connect automatically supplies us with the dispatch prop if we do not pass it a second argument, which is why we are able to access it
const CartDropdown = ({ cartItems, dispatch, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// if we do not supply a second argument to connect, it will automatically supply our component with the mapDispatchToProps prop
export default withRouter(connect(mapStateToProps)(CartDropdown));
