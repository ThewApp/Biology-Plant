import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DicotExpansion from "./DicotExpansion";
import DicotInfo from "./DicotInfo";

const styles = theme => ({
  root: { margin: theme.spacing.unit }
});

class Dicot extends PureComponent {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <DicotExpansion />
          </Grid>
          <Grid item xs={12} md={6}>
            <DicotInfo />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Dicot);
