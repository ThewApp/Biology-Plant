import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    margin: `${theme.spacing.unit}px 0`
  },
  chip: {
    marginLeft: "0.5em",
    marginTop: theme.spacing.unit,
    WebkitTapHighlightColor: 'transparent',
    textDecoration: "none",
    cursor: 'pointer',
    '&:hover, &:focus': {
      backgroundColor: emphasize(theme.palette.grey[300], 0.08),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  }
});

function Chips(props) {
  return (
    <div className={props.classes.root}>
      <Typography>ประกอบด้วย</Typography>
      {props.included.map(name => (
        <Chip
          key={name}
          label={name}
          className={props.classes.chip}
          component={Link}
          to={`tissue/${name}`}
        />
      ))}
    </div>
  );
}

export default withStyles(styles)(Chips);
