import React from "react";
import "./Drawer.css";
import { Divider, Button } from "@material-ui/core";
import DraftsIcon from "@material-ui/icons/Drafts";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";

import AddToCart from "../AddToCart";

const Drawer = () => {
  const item = [
    {
      icon: DraftsIcon,
    },
    {
      icon: StarIcon,
    },
    {
      icon: SendIcon,
    },
  ];
  return (
    <div className="drawer">
      <div className="drawerContent">
        <h1>Headline</h1>
        <h2>Body</h2>
        <Divider />
        <div className="drawer__items">
          {item.map((e) => (
            <Button style={{ color: "gray" }}>
              <e.icon style={{ marginRight: 20 }} />
              <h3>Body</h3>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
