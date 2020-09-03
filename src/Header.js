import React from "react";
import "./Header.css";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import { IconButton, Badge } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartItem } from "./App";

const Header = () => {
  const history = useHistory();
  const [item, setItem] = useContext(CartItem);
  return (
    <div className="header">
      <h1 onClick={() => history.push("/")}>Component-Generator</h1>
      <div>
        <IconButton onClick={() => history.push("/cart")}>
          <Badge badgeContent={item.length} color="primary" showZero>
            <ShoppingCartOutlinedIcon style={{ color: "white" }} />
          </Badge>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon style={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
