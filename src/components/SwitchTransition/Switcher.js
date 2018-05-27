import React, { PureComponent } from "react";
import { Switch } from "react-router-dom";

class Switcher extends PureComponent {
  render() {
    return (
      <Switch location={this.props.location}>{this.props.children}</Switch>
    );
  }
}

export default Switcher;
