import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// header
import Header from "./components/Header/Header";
// pages
import SignInAndSignUp from "./pages/Auth/Auth";
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";

import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
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
