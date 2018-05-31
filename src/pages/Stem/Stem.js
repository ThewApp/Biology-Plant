import React from "react";
import SectionRoute from "../../components/SectionRoute";
import StemExternal from "./StemExternal";
import StemInternal from "./StemInternal";
import StemModified from "./StemModified";
import StemCompare from "./StemCompare";

const routeConfig = [
  {
    path: "/external",
    component: StemExternal
  },
  {
    path: "/internal",
    component: StemInternal
  },
  {
    path: "/modified",
    component: StemModified
  },
  {
    path: "/compare",
    component: StemCompare
  }
];

function Stem(props) {
  return <SectionRoute path={props.match.path} routeConfig={routeConfig} />;
}

export default Stem;
