import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "block",
    margin: "0 auto",
    width: "100%",
    [theme.breakpoints.up("md")] : {
        width: "75%",
    },
    [theme.breakpoints.up("lg")] : {
        width: "50%",
    }
  }
});

function Image(props) {
  return <img className={props.classes.root} src={props.src} alt={props.alt} />;
}

export default withStyles(styles)(Image);
