import React from "react";
import SectionRoute from "../../components/SectionRoute";
import RootType from "./RootType";
import RootCrossVertical from "./RootCrossVertical";
import RootCrossHorizontal from "./RootCrossHorizontal";
import RootModified from "./RootModified";
import RootCompare from "./RootCompare";

const routeConfig = [
  {
    path: "/type",
    component: RootType
  },
  {
    path: "/cross-vertical",
    component: RootCrossVertical
  },
  {
    path: "/cross-horizontal",
    component: RootCrossHorizontal
  },
  {
    path: "/modified",
    component: RootModified
  },
  {
    path: "/compare",
    component: RootCompare
  }
];

function Root(props) {
  return <SectionRoute path={props.match.path} routeConfig={routeConfig} />;
}

export default Root;
