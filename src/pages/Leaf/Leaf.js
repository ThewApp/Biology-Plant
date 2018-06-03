import React from "react";
import SectionRoute from "../../components/SectionRoute";
import LeafView from "./LeafView";
import LeafModified from "./LeafModified";
import LeafCompare from "./LeafCompare";

const routeConfig = [
  {
    path: "/view",
    component: LeafView
  },
  {
    path: "/modified",
    component: LeafModified
  },
  {
    path: "/compare",
    component: LeafCompare
  }
];

function Leaf(props) {
  return (
    <SectionRoute
      path={props.match.path}
      routeConfig={routeConfig}
    />
  );
}

export default Leaf;
