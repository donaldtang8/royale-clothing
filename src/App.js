import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";
// header
import Header from "./components/Header/Header";
// pages
import SignInAndSignUp from "./pages/Auth/Auth";
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/actions/User";
import { selectCurrentUser } from "./redux/selectors/User";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if userAuth is not null, user is signed in
      if (userAuth) {
        // if user is signed in, get back user profile document
        // if there is a document there, we will get that back, if not, we will create a new object and return the userRef in utils class
        const userRef = await createUserProfileDocument(userAuth);
        // now we subscribe (listen) to the userRef for any changes to data and get back first state of that data and set the state
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      // userAuth is null here so this is equivalent to setting currentUser is null
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
