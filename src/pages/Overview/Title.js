import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 5,
    [theme.breakpoints.only("xs")]: {
      color: theme.typography.headline.color
    },
    ".expand &": {
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
    ".expand &": {
      outline: "white auto 5px"
    }
  }
});

class Title extends PureComponent {
  render() {
    return (
      <Typography variant="display1" className={this.props.classes.root}>
        <ButtonBase
          disableRipple
          focusVisibleClassName={this.props.classes.focus}
          className={this.props.classes.button}
          onClick={this.props.onClick}
          data-index={this.props.index}
        >
          {this.props.children}
        </ButtonBase>
      </Typography>
    );
  }
}

export default withStyles(styles)(Title);
