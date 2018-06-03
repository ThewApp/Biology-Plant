import React from "react";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import compose from "recompose/compose";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ScreenRotationIcon from "@material-ui/icons/ScreenRotation";
import LoadingImage from "./LoadingImage";
import ImageLabel from "./ImageLabel";

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto",
      marginTop: theme.spacing.unit * 2,
      width: "50vw"
    }
  },
  display1: {
    padding: theme.spacing.unit
  },
  image: {},
  wrapper: {
    position: "relative"
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing.unit,
      paddingTop: 0
    }
  },
  hint: {
    margin: theme.spacing.unit
  },
  hintIcon: {
    position: "relative",
    top: "0.25em",
    marginRight: "0.2em"
  }
});

function ImageView(props) {
  const imgData = props.data.image;
  const labelData = props.data.label;
  const lists = labelData.length > 0 && (
    <ul className={props.classes.list}>
      {labelData.map(obj => <ImageLabel key={obj.text + obj.anchorPosition.top} {...obj} imgSize={imgData.size} />)}
    </ul>
  );
  if (props.width === "xs") {
    return (
      <Paper className={props.classes.root}>
        {props.title && (
          <Typography variant="display1" className={props.classes.display1}>
            {props.title}
          </Typography>
        )}
        <LoadingImage
          className={props.classes.image}
          src={imgData.src}
          alt={imgData.alt}
        />
        {labelData.length > 0 && (
          <Typography className={props.classes.hint}>
            <ScreenRotationIcon className={props.classes.hintIcon} />
            พลิกหน้าจอแนวนอนเพื่อดูตำแหน่งต่างๆ
          </Typography>
        )}
        {lists}
      </Paper>
    );
  }
  return (
    <div className={props.classes.root}>
      {props.title && (
        <Typography variant="display1" className={props.classes.display1}>
          {props.title}
        </Typography>
      )}
      <div className={props.classes.wrapper}>
        <LoadingImage
          className={props.classes.image}
          src={imgData.src}
          alt={imgData.alt}
        />
        {lists}
      </div>
    </div>
  );
}

export default compose(withStyles(styles), withWidth())(ImageView);
