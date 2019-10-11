import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// header
import Header from "./components/Header/Header";
// pages
import SignInAndSignUp from "./pages/Auth/Auth";
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if userAuth is not null, user is signed in
      if (userAuth) {
        // if user is signed in, get back user profile document
        // if there is a document there, we will get that back, if not, we will create a new object and return the userRef in utils class
        const userRef = await createUserProfileDocument(userAuth);
        // now we subscribe (listen) to the userRef for any changes to data and get back first state of that data and set the state
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        // userAuth is null here so this is equivalent to setting currentUser is null
        this.setState({
          currentUser: userAuth
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
