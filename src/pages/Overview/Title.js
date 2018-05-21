import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 5,
    ".active &": {
      color: theme.palette.common.white
    }
  },
  button: {
    width: "100%",
    fontSize: "inherit",
    display: "inline",
    textAlign: "inherit"
  },
  focus: {
    outline: "orange auto 5px",
    ".active &": {
        outline: "white auto 5px"
    }
  }
});

function Title(props) {
  return (
    <Typography variant="display1" className={props.classes.root}>
      <ButtonBase
        disableRipple
        focusVisibleClassName={props.classes.focus}
        className={props.classes.button}
        onClick={props.onClick}
      >
        {props.children}
      </ButtonBase>
    </Typography>
  );
}

export default withStyles(styles)(Title);
