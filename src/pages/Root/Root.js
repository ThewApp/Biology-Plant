import React from "react";
import SectionRoute from "../../components/SectionRoute";
import RootExternal from "./RootExternal";
import RootInternal from "./RootInternal";
import RootModified from "./RootModified";
import RootCompare from "./RootCompare";

function Root(props) {
  return (
    <SectionRoute
      path={props.match.path}
      external={RootExternal}
      internal={RootInternal}
      modified={RootModified}
      compare={RootCompare}
    />
  );
}

export default Root;