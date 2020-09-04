import React from "react";
import "./Breadcrumbs.css";
import BreadcrumbsComponent from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";

const Breadcrumbs = () => {
  return (
    <BreadcrumbsComponent aria-label="breadcrumb" className="breadcrumbs">
      <Link color="inherit">Material-UI</Link>

      <Link color="inherit">Core</Link>
      <Typography color="textPrimary">Breadcrumbs</Typography>
    </BreadcrumbsComponent>
  );
};

export default Breadcrumbs;
