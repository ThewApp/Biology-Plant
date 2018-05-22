import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Route, Link } from "react-router-dom";

const styles = theme => ({
  root: {
    display: "inline-block",
    position: "relative",
    "&.active $indicator": {
      transform: "scaleY(1)"
    },
    "&.active $link": {
      color: theme.palette.common.white
    },
    "&.active.exact $link": {
      pointerEvents: "none"
    }
  },
  link: {
    display: "inline-block",
    padding: [[0, theme.spacing.unit * 1]],
    fontSize: "1.5rem",
    fontFamily: theme.typography.fontFamily,
    lineHeight: `${theme.spacing.unit * 9}px`,
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: theme.palette.common.white
    },
    "&:focus": {
      outlineColor: theme.palette.common.white
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
      lineHeight: `${theme.spacing.unit * 6}px`
    }
  },
  indicator: {
    backgroundColor: theme.palette.common.white,
    width: "100%",
    height: "4px",
    position: "absolute",
    left: 0,
    bottom: 0,
    transform: "scaleY(0)",
    transformOrigin: "bottom",
    transition: "transform 235ms cubic-bezier(.4,0,.2,1)"
  }
});

function NavItem(props) {
  const Item = route => (
    <li
      className={
        props.classes.root +
        (route.match ? " active" + (route.match.isExact ? " exact" : "") : "")
      }
    >
      <Link className={props.classes.link} to={props.to}>
        {props.text}
      </Link>
      <span className={props.classes.indicator} />
    </li>
  );
  return <Route path={props.to} exact={props.exact} children={Item} />;
}

export default withStyles(styles)(NavItem);
