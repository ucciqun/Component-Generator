import React from "react";
import "./Grid.css";
import { Grid, Paper } from "@material-ui/core";

export const Grida = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className="grid__paper">xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className="grid__paper">xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className="grid__paper">xs=6</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="grid__paper">xs=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="grid__paper">xs=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="grid__paper">xs=4</Paper>
        </Grid>
      </Grid>
    </div>
  );
};
