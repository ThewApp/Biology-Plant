import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  intro: {
    [theme.breakpoints.only("xs")]: {
      color: theme.typography.display1.color
    },
    [theme.breakpoints.up("sm")]: {
      height: 0,
      opacity: 0,
      transform: "translateX(-20px)",
      willChange: ["height", "opacity", "transform"],
      transition: ["height .5s", "opacity .5s", "transform .5s"],
      color: theme.palette.common.white,
      pointerEvents: "none"
    },
    ".expand &": {
      color: theme.palette.common.white,
      [theme.breakpoints.up("sm")]: {
        height: theme.typography.display1.lineHeight,
        opacity: 1,
        transform: "translateX(0)",
        pointerEvents: "auto"
      }
    }
  }
});

class Intro extends PureComponent {
  render() {
    return (
      <Typography variant="headline" className={this.props.classes.intro}>
        {this.props.children}
      </Typography>
    );
  }
}

export default withStyles(styles)(Intro);
