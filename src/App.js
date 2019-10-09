import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// header
import Header from "./components/Header/Header";
// pages
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
