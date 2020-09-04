import React from "react";
import "./Loading.css";
import ContentLoader from "react-content-loader";

const Loading = () => {
  return (
    <div className="loadingContainer">
      <ContentLoader
        className="loading"
        viewBox="0 0 100 150"
        preserveAspectRatio="none"
      >
        <rect x="0" y="0" height="40" width="100" />
        <rect x="0" y="50" height="14" className="loading__text" />
        <rect x="0" y="74" height="14" className="loading__text" />
        <rect
          x="0"
          y="98"
          rx="3"
          ry="3"
          height="14"
          className="loading__textEnd"
        />
      </ContentLoader>
      <ContentLoader viewBox="0 0 100 100">
        <circle cx="20" cy="20" r="20" />
      </ContentLoader>
    </div>
  );
};

export default Loading;
