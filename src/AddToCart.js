import React from "react";
import { useContext } from "react";
import { CartItem } from "./App";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddToCart = ({ item }) => {
  const [items, setItem] = useContext(CartItem);
  return (
    <Button variant="outlined" onClick={() => setItem([...items, item])}>
      <AddIcon style={{ color: "gray" }} />
      Add to cart
    </Button>
  );
};

export default AddToCart;
