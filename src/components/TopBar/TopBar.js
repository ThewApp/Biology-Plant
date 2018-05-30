import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Nav from "./Nav";

const styles = theme => ({
  toolbar: {
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      alignItems: "normal",
      height: `${theme.spacing.unit * 10}px`
    }
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      height: `${theme.spacing.unit * 6}px`,
      display: "flex",
      alignItems: "center"
    }
  }
});

function TopBar(props) {
  return (
    <AppBar position="static">
      <Toolbar className={props.classes.toolbar}>
        <Typography variant="title" className={props.classes.title}>
          Biology : Plant
        </Typography>
        <Nav />
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(TopBar);
