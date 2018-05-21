import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const styles = theme => ({
  root: {
    position: "sticky",
    top: 0,
    zIndex: 10
  },
  tabLabel: { fontSize: "1rem" }
});

class PlantTypesTab extends PureComponent {
  render() {
    return (
      <Paper className={this.props.classes.root}>
        <Tabs
          value={this.props.value}
          onChange={this.props.onChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab
            classes={{ label: this.props.classes.tabLabel }}
            label="ใบเลี้ยงคู่"
            aria-controls="dicotTabPanel"
            id="dicotTabButton"
          />
          <Tab
            classes={{ label: this.props.classes.tabLabel }}
            label="ใบเลี้ยงเดี่ยว"
            aria-controls="monocotTabPanel"
            id="monocotTabButton"
          />
        </Tabs>
      </Paper>
    );
  }
}

export default withStyles(styles)(PlantTypesTab);
