import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "./FixedButtonBase"; // Use Fix by Thew
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    color: "inherit",
    textDecoration: "inherit",
    width: "100%",
    height: "100%"
  },
  focusVisible: {
    outline: "auto 5px",
    outlineColor: theme.palette.primary.main
  },
  card: {
    width: "100%",
    height: "100%"
  },
  media: {
    height: 0,
    paddingTop: "calc(9 / 16 * 100%)"
  },
  content: {
    width: "100%"
  }
});

function SectionSelectorCard(props) {
  return (
    <ButtonBase
      component={Link}
      to={props.to}
      className={props.classes.root}
      focusVisibleClassName={props.classes.focusVisible}
    >
      <Card className={props.classes.card}>
        <CardMedia
          className={props.classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent className={props.classes.content}>
          <Typography gutterBottom variant="headline">
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}

export default withStyles(styles)(SectionSelectorCard);
