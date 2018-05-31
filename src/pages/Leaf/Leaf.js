import React from "react";
import SectionRoute from "../../components/SectionRoute";
import LeafExternal from "./LeafExternal";
import LeafInternal from "./LeafInternal";
import LeafModified from "./LeafModified";

const routeConfig = [
  {
    path: "/external",
    component: LeafExternal
  },
  {
    path: "/internal",
    component: LeafInternal
  },
  {
    path: "/modified",
    component: LeafModified
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
