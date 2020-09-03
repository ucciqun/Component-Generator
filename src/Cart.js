import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { CartItem } from "./App";
import { Button } from "@material-ui/core";

const Cart = () => {
  const [item, setItem] = useContext(CartItem);
  return (
    <div>
      <h1>This is a Cart</h1>
      {item.map((e) => (
        <Button style={{ textTransform: "none" }}>{e}</Button>
      ))}
    </div>
  );
};

export default Cart;
