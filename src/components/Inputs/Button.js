import React from "react";
import "./Button.css";
import { Button, Paper } from "@material-ui/core";

export const Buttona = () => {
  return (
    <div>
      <Paper className="button__paper">
        <h3>Contained Buttons</h3>
        <h1>test</h1>
        <div className="button__buttonsContainer">
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            primary
          </Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
        </div>
      </Paper>
      <Paper className="button__paper">
        <h3>text Buttons</h3>
        <div className="button__buttonsContainer">
          <Button>Default</Button>
          <Button color="primary">primary</Button>
          <Button color="secondary">secondary</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Paper>
      <Paper className="button__paper">
        <h3>Contained Buttons</h3>
        <div className="button__buttonsContainer">
          <Button variant="outlined">Default</Button>
          <Button variant="outlined" color="primary">
            primary
          </Button>
          <Button variant="outlined" color="secondary">
            secondary
          </Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
        </div>
      </Paper>
    </div>
  );
};
