import React, { useContext } from "react";
import "./App.css";
import { useState } from "react";
import { IconButton, Button } from "@material-ui/core";

import Header from "./Header";
import Nav from "./Nav";
import Store from "./Store";
import Cart from "./Cart";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext } from "react";

export const CartItem = createContext();
function App() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("App");
  return (
    <div className="app">
      <CartItem.Provider value={[items, setItems, currentItem, setCurrentItem]}>
        <Router>
          <Header />
          <div className="app__body">
            <Switch>
              <Route exact path="/">
                <Button>App</Button>
                <Button>Header</Button>
                <Button>Body</Button>
                <Button>Footer </Button>
                <div className="app__root">
                  <Nav className="app__nav" />
                  <Store className="app__store" />
                </div>
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </CartItem.Provider>
    </div>
  );
}

export default App;
