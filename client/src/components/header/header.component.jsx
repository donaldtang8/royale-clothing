import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { NavContainer, NavLink, NavItem } from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <NavContainer>
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <NavLink className="navbar-brand" to="/">
        ROYALE.
        {/* <Logo className="logo" /> */}
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ml-auto" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <NavItem className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </NavItem>
          {currentUser ? (
            <NavItem className="nav-item">
              <Link className="nav-link" onClick={signOutStart}>
                Sign Out
              </Link>
            </NavItem>
          ) : (
            <NavItem className="nav-item">
              <Link className="nav-link" to="/signin">
                Sign In
              </Link>
            </NavItem>
          )}
          <NavItem className="nav-item">
            <CartIcon />
          </NavItem>
          {hidden ? null : <CartDropdown />}
        </ul>
      </div>
    </nav>
  </NavContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
