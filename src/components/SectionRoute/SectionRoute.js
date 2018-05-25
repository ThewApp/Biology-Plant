import React from "react";
import { Switch, Route } from "react-router-dom";
import SectionSelector from "./SectionSelector";

function SectionRoute(props) {
  return (
    <Switch>
      <Route
        exact
        path={props.match.path + "/external"}
        component={props.external}
      />
      <Route
        exact
        path={props.match.path + "/internal"}
        component={props.internal}
      />
      <Route
        exact
        path={props.match.path + "/modified"}
        component={props.modified}
      />
      <Route
        exact
        path={props.match.path + "/compare"}
        component={props.compare}
      />
      <Route component={SectionSelector} />
    </Switch>
  );
}

export default SectionRoute;
