import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  PlantTypesTab,
  PlantTypesTabPanel
} from "../../components/PlantTypesTab";
import Dicot from "./Dicot";
import Monocot from "./Monocot";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit
  }
});

class Stem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: 0,
      direction: "left"
    };
    this.changeType = this.changeType.bind(this);
  }

  changeType(e, type) {
    this.setState(prev => ({
      type: type,
      direction: prev.type < type ? "left" : "right"
    }));
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <PlantTypesTab value={this.state.type} onChange={this.changeType} />
        <PlantTypesTabPanel
          dicot={<Dicot />}
          monocot={<Monocot />}
          active={this.state.type}
          direction={this.state.direction}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Stem);
