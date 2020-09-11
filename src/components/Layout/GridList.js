import React from "react";
import "./GridList.css";
import { GridList, GridListTile } from "@material-ui/core";

export const GridLista = () => {
  const tileData = [
    {
      img: "https://material-ui.com/static/images/grid-list/breakfast.jpg",
      title: "breakfast",
      author: "",
      cols: 2,
    },
    {
      img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
      title: "burgers",
      author: "",
      cols: 1,
    },
    {
      img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
      title: "burgers",
      author: "",
      cols: 1,
    },
    {
      img: "https://material-ui.com/static/images/grid-list/breakfast.jpg",
      title: "breakfast",
      author: "",
      cols: 2,
    },
    {
      img: "https://material-ui.com/static/images/grid-list/breakfast.jpg",
      title: "breakfast",
      author: "",
      cols: 2,
    },
    {
      img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
      title: "burgers",
      author: "",
      cols: 1,
    },
    {
      img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
      title: "burgers",
      author: "",
      cols: 1,
    },
    {
      img: "https://material-ui.com/static/images/grid-list/breakfast.jpg",
      title: "breakfast",
      author: "",
      cols: 2,
    },
  ];
  return (
    <div className="gridList">
      <GridList cellHeight={160} className="gridList__container" cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
