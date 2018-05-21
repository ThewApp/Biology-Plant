import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit
  },
  chip: {
    marginLeft: "0.5em",
    marginTop: theme.spacing.unit,
    backgroundColor: "#f3f3f3",
    "&:focus, &:hover": {
      backgroundColor: "#e5e5e5"
    }
  },
  epidermis: {
    fontSize: theme.typography.subheading.fontSize,
    color: "#009933"
  },
  cortex: {
    fontSize: theme.typography.subheading.fontSize,
    color: "#3366cc"
  },
  stele: {
    fontSize: theme.typography.subheading.fontSize,
    color: "#cc9900"
  }
});

function Chips(props) {
  return (
    <div className={props.classes.root}>
      <Typography variant="subheading" className={props.hideClass}>
        แบ่งย่อยเป็น
      </Typography>
      <Chip
        label={props.first}
        className={props.classes.chip}
        classes={{ label: props.classes.epidermis }}
        onClick={props.firstClick}
      />
      <Chip
        label={props.second}
        className={props.classes.chip}
        classes={{ label: props.classes.cortex }}
        onClick={props.secondClick}
      />
      <Chip
        label={props.third}
        className={props.classes.chip}
        classes={{ label: props.classes.stele }}
        onClick={props.thirdClick}
      />
    </div>
  );
}

export default withStyles(styles)(Chips);
