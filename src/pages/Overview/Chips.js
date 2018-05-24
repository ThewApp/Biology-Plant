import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import { Link } from "react-router-dom";

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
    },
    "&.link": {
      WebkitTapHighlightColor: "transparent",
      textDecoration: "none",
      cursor: "pointer",
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(theme.palette.grey[300], 0.12)
      }
    },
    "&.active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.5)
    }
  },
  epidermis: {
    fontSize: theme.typography.subheading.fontSize,
    color: "#009933",
    "$chip.active &": {
      color: theme.palette.common.white
    }
  },
  cortex: {
    fontSize: theme.typography.subheading.fontSize,
    color: "#3366cc",
    "$chip.active &": {
      color: theme.palette.common.white
    }
  },
  stele: {
    fontSize: theme.typography.subheading.fontSize,
    color: "#cc9900",
    "$chip.active &": {
      color: theme.palette.common.white
    }
  }
});

class Chips extends PureComponent {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography variant="subheading" className={this.props.hideClass}>
          แบ่งย่อยเป็น
        </Typography>
        <Chip
          label={this.props.first}
          className={
            this.props.classes.chip +
            (this.props.firstTo ? " link" : "") +
            (!this.props.firstTo && this.props.image === this.props.firstImage ? " active" : "")
          }
          classes={{ label: this.props.classes.epidermis }}
          to={this.props.firstTo}
          component={this.props.firstTo ? Link : "div"}
          tabIndex="0"
          onClick={this.props.onClick}
          data-list={this.props.list}
          data-image={this.props.firstImage}
        />
        <Chip
          label={this.props.second}
          className={
            this.props.classes.chip +
            (this.props.secondTo ? " link" : "") +
            (!this.props.secondTo && this.props.image === this.props.secondImage ? " active" : "")
          }
          classes={{ label: this.props.classes.cortex }}
          to={this.props.secondTo}
          component={this.props.secondTo ? Link : "div"}
          tabIndex="0"
          onClick={this.props.onClick}
          data-list={this.props.list}
          data-image={this.props.secondImage}
        />
        {this.props.third && (
          <Chip
            label={this.props.third}
            className={
              this.props.classes.chip +
              (this.props.thirdTo ? " link" : "") +
              (!this.props.thirdTo && this.props.image === this.props.thirdImage ? " active" : "")
            }
            classes={{ label: this.props.classes.stele }}
            to={this.props.thirdTo}
            component={this.props.thirdTo ? Link : "div"}
            tabIndex="0"
            onClick={this.props.onClick}
            data-list={this.props.list}
            data-image={this.props.thirdImage}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Chips);
