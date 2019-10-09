import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
// pages
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
    </div>
  );
}

export default App;
