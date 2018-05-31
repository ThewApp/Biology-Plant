import React from "react";
import { Switch, Route } from "react-router-dom";
import SectionSelector from "./SectionSelector";

function SectionRoute(props) {
  return (
    <Switch>
      {props.routeConfig.map(obj => (
        <Route
          key={obj.path}
          exact
          path={props.path + obj.path}
          component={obj.component}
        />
      ))}
      <Route component={SectionSelector} />
    </Switch>
  );
}

export default SectionRoute;
