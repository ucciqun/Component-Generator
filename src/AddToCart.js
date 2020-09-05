import React from "react";
import { useContext } from "react";
import { CartItem } from "./App";
import { Button, ButtonGroup } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from "@material-ui/icons/Done";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import { useState } from "react";

const AddToCart = ({ item }) => {
  const [items, setItems, currentItem, setCurrentItem] = useContext(CartItem);
  const [check, setCheck] = useState(false);
  return (
    <>
      {check ? (
        <Button onClick={() => setCheck(!check)}>
          <DoneIcon style={{ color: "green" }} />
          Purchased
        </Button>
      ) : (
        <ButtonGroup variant="outlined">
          <Button variant="outlined" onClick={() => setCurrentItem(item)}>
            <CreateNewFolderIcon style={{ color: "gray" }} />
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setItems([...items, item]);
              setCheck(!check);
            }}
            startIcon={<AddIcon style={{ color: "gray" }} />}
          >
            {currentItem}
          </Button>
        </ButtonGroup>
      )}
    </>
  );
};

export default AddToCart;
