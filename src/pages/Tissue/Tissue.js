import React from "react";
import { Switch, Route } from "react-router-dom";
import Markdown from "../../components/Markdown";

import Epidermis from "./Epidermis";
import Cortex from "./Cortex";
import Stele from "./Stele";

const tissueRouteConfig = [
  {
    path: "/epidermis",
    data: Epidermis
  },
  {
    path: "/cortex",
    data: Cortex
  },
  {
    path: "/stele",
    data: Stele
  }
];

function Tissue(props) {
  return (
    <Switch>
      {tissueRouteConfig.map(obj => (
        <Route
          exact
          key={obj.path}
          path={props.match.path + obj.path}
          render={() => <Markdown data={obj.data} />}
        />
      ))}
      <Route />
    </Switch>
  );
}

export default Tissue;
