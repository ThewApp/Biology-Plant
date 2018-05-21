import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "block",
    maxWidth: "300px",
    height: 0,
    margin: "0 auto",
    opacity: 0,
    ".active &": {
      opacity: 1,
      height: "300px"
    },
    transition: [["opacity .5s"], ["height .5s"]],
    willChange: ["opacity", "height"],
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      top: theme.spacing.unit * 5,
      right: 0,
      maxWidth: "300px",
      transition: "opacity .5s",
      willChange: "opacity",
      ".active &": {
        height: "inherit"
      },
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "480px"
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "600px",
      right: "2vw",
    }
  }
});

function Image(props) {
  return <img className={props.classes.root} src={props.src} alt={props.alt} />;
}

export default withStyles(styles)(Image);
