import React from "react";
import SectionRoute from "../../components/SectionRoute";
import RootType from "./RootType";
import RootView from "./RootView";
import RootModified from "./RootModified";
import RootCompare from "./RootCompare";

const routeConfig = [
  {
    path: "/type",
    component: RootType
  },
  {
    path: "/view",
    component: RootView
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
