import React from "react";
import "./AppBar.css";

import { Button, IconButton } from "@material-ui/core";
import DehazeIcon from "@material-ui/icons/Dehaze";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import SearchIcon from "@material-ui/icons/Search";
import AddToCart from "../AddToCart";
const AppBar = () => {
  return (
    <div className="topAppBar">
      <div>
        <IconButton>
          <DehazeIcon />
        </IconButton>
      </div>
      <h2>Headline</h2>
      <div>
        <IconButton>
          <ShareIcon />
        </IconButton>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default AppBar;
