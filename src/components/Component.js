import React from "react";
import AddToCart from "../AddToCart";
import "./Component.css";

const Component = ({ title, children }) => {
  return (
    <div className="component">
      <div className="component__details">
        <h2>{title}</h2>
        <AddToCart item={title} />
      </div>
      {children}
    </div>
  );
};

export default Component;
