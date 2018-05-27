import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
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

class SectionSelectorCard extends PureComponent {
  render() {
    return (
      <ButtonBase
        component={Link}
        to={this.props.to}
        className={this.props.classes.root}
        focusVisibleClassName={this.props.classes.focusVisible}
      >
        <Card className={this.props.classes.card}>
          <CardMedia
            className={this.props.classes.media}
            image={this.props.image}
            title={this.props.title}
          />
          <CardContent className={this.props.classes.content}>
            <Typography gutterBottom variant="headline">
              {this.props.title}
            </Typography>
          </CardContent>
        </Card>
      </ButtonBase>
    );
  }
}

export default withStyles(styles)(SectionSelectorCard);
