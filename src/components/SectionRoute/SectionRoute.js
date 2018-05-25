import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";
import SectionSelector from "./SectionSelector";

class SectionRoute extends PureComponent {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={this.props.path + "/external"}
          component={this.props.external}
        />
        <Route
          exact
          path={this.props.path + "/internal"}
          component={this.props.internal}
        />
        <Route
          exact
          path={this.props.path + "/modified"}
          component={this.props.modified}
        />
        <Route
          exact
          path={this.props.path + "/compare"}
          component={this.props.compare}
        />
        <Route component={SectionSelector} />
      </Switch>
    );
  }
}

export default SectionRoute;
