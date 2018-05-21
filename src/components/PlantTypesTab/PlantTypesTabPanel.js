import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PlantTypesTabPanelTransition from "./PlantTypesTabPanelTransition";

const styles = theme => ({
  root: {
    position: "relative",
    overflow: "hidden"
  }
});

function TabPanel(props) {
  return (
    <div className={props.classes.root}>
      <PlantTypesTabPanelTransition
        active={props.active === 0}
        direction={props.direction}
        ariaLabelledby="dicotTabButton"
        id="dicotTabPanel"
        defaultActive
      >
        {props.dicot}
      </PlantTypesTabPanelTransition>
      <PlantTypesTabPanelTransition
        active={props.active === 1}
        direction={props.direction}
        ariaLabelledby="monocotTabButton"
        id="monocotTabPanel"
      >
        {props.monocot}
      </PlantTypesTabPanelTransition>
    </div>
  );
}

export default withStyles(styles)(TabPanel);
