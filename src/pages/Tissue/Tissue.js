import React from "react";
import { Switch, Route } from "react-router-dom";
import Markdown from "../../components/Markdown";

import Epidermis from "./Epidermis";
import Cortex from "./Cortex";
import Stele from "./Stele";
import Parenchyma from "./Parenchyma";
import Collenchyma from "./Collenchyma";
import Sclerenchyma from "./Sclerenchyma";
import VascularBundle from "./VascularBundle";
import Phloem from "./Phloem";
import Xylem from "./Xylem";
import VascularCambium from "./VascularCambium";

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
  },
  {
    path: "/parenchyma",
    data: Parenchyma
  },
  {
    path: "/collenchyma",
    data: Collenchyma
  },
  {
    path: "/sclerenchyma",
    data: Sclerenchyma
  },
  {
    path: "/vascular-bundle",
    data: VascularBundle
  },
  {
    path: "/phloem",
    data: Phloem
  },
  {
    path: "/xylem",
    data: Xylem
  },
  {
    path: "/vascular-cambium",
    data: VascularCambium
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
