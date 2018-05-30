import React from "react";
import SectionRoute from "../../components/SectionRoute";
import LeafExternal from "./LeafExternal";
import LeafInternal from "./LeafInternal";
import LeafModified from "./LeafModified";
import LeafCompare from "./LeafCompare";

function Leaf(props) {
  return (
    <SectionRoute
      path={props.match.path}
      external={LeafExternal}
      internal={LeafInternal}
      modified={LeafModified}
      compare={LeafCompare}
    />
  );
}

export default Leaf;
