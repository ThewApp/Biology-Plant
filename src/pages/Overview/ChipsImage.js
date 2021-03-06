import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { emphasize } from "@material-ui/core/styles/colorManipulator";

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit
  },
  chipText: {
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
  },
  chip: {
    marginLeft: "0.5em",
    marginTop: theme.spacing.unit,
    fontSize: theme.typography.subheading.fontSize,
    backgroundColor: "#f3f3f3",
    "&:focus, &:hover": {
      backgroundColor: "#e5e5e5"
    },
    "&.active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.5)
    }
  }
});

class ChipsImage extends PureComponent {
  render() {
    const Chips = this.props.chips.map(obj => (
      <Chip
        key={obj.label}
        label={obj.label}
        className={
          this.props.classes.chip + (this.props.activeLabel === obj.label ? " active" : "")
        }
        onClick={this.props.setActiveLabel}
        data-label={obj.label}
        style={{ color: this.props.activeLabel === obj.label ? "#fff" : obj.color }}
      />
    ));
    return (
      <div className={this.props.classes.root}>
        <Typography variant="subheading" className={this.props.classes.chipText}>
          แบ่งย่อยเป็น
        </Typography>
        {Chips}
      </div>
    );
  }
}

export default withStyles(styles)(ChipsImage);
