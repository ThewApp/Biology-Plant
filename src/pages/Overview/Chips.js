import React, { PureComponent } from "react";
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

class Chips extends PureComponent {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography variant="subheading" className={this.props.hideClass}>
          แบ่งย่อยเป็น
        </Typography>
        <Chip
          label={this.props.first}
          className={this.props.classes.chip}
          classes={{ label: this.props.classes.epidermis }}
          onClick={this.props.firstClick}
          data-list="1"
        />
        <Chip
          label={this.props.second}
          className={this.props.classes.chip}
          classes={{ label: this.props.classes.cortex }}
          onClick={this.props.secondClick}
          data-list="1"
        />
        {this.props.third && (
          <Chip
            label={this.props.third}
            className={this.props.classes.chip}
            classes={{ label: this.props.classes.stele }}
            onClick={this.props.thirdClick}
            data-list="1"
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Chips);
