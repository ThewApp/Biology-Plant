import React from "react";
import { withStyles } from "@material-ui/core/styles";
import NavItem from "./NavItem";

const styles = theme => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      marginLeft: "auto"
    },
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      bottom: 0,
      left: theme.spacing.unit * 2
    }
  },
  linkList: {
    listStyle: "none",
    margin: 0,
    padding: 0
  }
});

function Nav(props) {
  return (
    <nav className={props.classes.root}>
      <ul className={props.classes.linkList}>
        <NavItem to="/" text="ภาพรวม" exact />
        <NavItem to="/stem" text="ลำต้น" />
        <NavItem to="/root" text="ราก" />
        <NavItem to="/leaf" text="ใบ" />
      </ul>
    </nav>
  );
}

export default withStyles(styles)(Nav);
