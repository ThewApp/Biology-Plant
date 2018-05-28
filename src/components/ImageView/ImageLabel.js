import React from "react";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import compose from "recompose/compose";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing.unit
    }
  },
  anchor: {
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      width: "20px",
      height: "20px",
      boxSizing: "border-box",
      border: "2px solid",
      borderColor: theme.palette.common.black,
      borderRadius: "50%",
      backgroundColor: theme.palette.common.white,
      zIndex: 3
    }
  },
  vector: {
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      height: "2px",
      backgroundColor: theme.palette.common.black,
      transformOrigin: "0 100%",
      zIndex: 1
    }
  },
  paper: {
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      width: "160px",
      boxSizing: "border-box",
      border: "2px solid",
      borderColor: theme.palette.common.black,
      padding: theme.spacing.unit / 2,
      zIndex: 2
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing.unit,
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing.unit * 1.5,
    }
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  text: {
    "$link &": {
      color: theme.palette.primary.dark
    }
  },
  description: {
    [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing.unit / 2
    }
  }
});

function calculateAnchorStyle(anchorPosition) {
  const top = anchorPosition.top;
  const left = anchorPosition.left;
  return { top: `calc(${top}% - 10px)`, left: `calc(${left}% - 10px)` };
}

function calculateVectorStyle(anchorPosition, paperPosition) {
  const top = anchorPosition.top;
  const left = anchorPosition.left;
  const width = Math.sqrt(
    (anchorPosition.top - paperPosition.top) ** 2 +
      (anchorPosition.left - paperPosition.left) ** 2
  );
  const y = paperPosition.top - anchorPosition.top;
  const x = paperPosition.left - anchorPosition.left;
  let degree = Math.atan2(y, x) * 180 / Math.PI;
  const transform = `rotate(${degree}deg)`;
  return {
    top: `${top}%`,
    left: `${left}%`,
    width: `${width}%`,
    transform
  };
}

function calculatePaperStyle(paperPosition) {
  const top = paperPosition.top;
  const left = paperPosition.left;
  return { top: `calc(${top}% - 20px)`, left: `calc(${left}% - 80px)` };
}

function ImageLabel(props) {
  // Mobile Viewport
  if (props.width === "xs") {
    let text = (
      <Typography variant="subheading" className={props.classes.text}>
        {props.mobileText || props.text}
      </Typography>
    );
    if (props.link) {
      text = (
        <Link to={props.link} className={props.classes.link}>
          {text}
        </Link>
      );
    }
    return (
      <li className={props.classes.root}>
        {text}
        {props.description && (
          <Typography className={props.classes.description}>
            {props.mobileDescription || props.description}
          </Typography>
        )}
      </li>
    );
  }
  // Large Viewport
  const anchorStyle = calculateAnchorStyle(props.anchorPosition);
  const vectorStyle = calculateVectorStyle(
    props.anchorPosition,
    props.paperPosition
  );
  const paperStyle = calculatePaperStyle(props.paperPosition);
  let text = (
    <Typography variant="subheading" className={props.classes.text}>
      {props.text}
    </Typography>
  );
  if (props.link) {
    text = (
      <Link to={props.link} className={props.classes.link}>
        {text}
      </Link>
    );
  }
  return (
    <li className={props.classes.root}>
      <span className={props.classes.anchor} style={anchorStyle} />
      <span className={props.classes.vector} style={vectorStyle} />
      <Paper className={props.classes.paper} style={paperStyle}>
        {text}
        {props.description && (
          <Typography className={props.classes.description}>
            {props.description}
          </Typography>
        )}
      </Paper>
    </li>
  );
}

export default compose(withStyles(styles), withWidth())(ImageLabel);
