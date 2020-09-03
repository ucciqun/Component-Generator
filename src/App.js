import React, { useContext } from "react";
import "./App.css";
import { useState } from "react";
import { IconButton, Button } from "@material-ui/core";

import Header from "./Header";
import Nav from "./Nav";
import Store from "./Store";
import Cart from "./Cart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext } from "react";

export const CartItem = createContext();
function App() {
  const [item, setItem] = useState([]);
  return (
    <div className="app">
      <CartItem.Provider value={[item, setItem]}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Button>App</Button>
              <Button>Header</Button>
              <Button>Body</Button>
              <Button>Footer </Button>
              <div className="app__body">
                <Nav className="app__nav" />
                <Store className="app__store" />
              </div>
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </CartItem.Provider>
    </div>
  );
}

export default App;
