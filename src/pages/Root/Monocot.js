import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MonocotExpansion from "./MonocotExpansion";
import MonocotInfo from "./MonocotInfo";

const styles = theme => ({
  root: { margin: theme.spacing.unit }
});

class Monocot extends PureComponent {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <MonocotExpansion />
          </Grid>
          <Grid item xs={12} md={6}>
            <MonocotInfo />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Monocot);
