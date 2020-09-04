import React from "react";
import "./Store.css";
import { useContext } from "react";
import { CartItem } from "./App";

import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";
import BottomNav from "./components/BottomNav";
import Breadcrumbs from "./components/Breadcrumbs";
import Component from "./components/Component";
import Loading from "./components/Loading";

const Store = () => {
  const [item, setItem] = useContext(CartItem);
  return (
    <div className="store">
      <Component title="AppBar">
        <AppBar />
      </Component>
      <Component title="Drawer">
        <Drawer />
      </Component>
      <Component title="BottomNav">
        <BottomNav />
      </Component>
      <Component title="Breadcrumbs">
        <Breadcrumbs />
      </Component>
      <Component title="Loading">
        <Loading />
      </Component>
    </div>
  );
};

export default Store;
