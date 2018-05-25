import React from "react";
import SectionRoute from "../../components/SectionRoute";
import StemExternal from "./StemExternal";
import StemInternal from "./StemInternal";
import StemModified from "./StemModified";
import StemCompare from "./StemCompare";

function Stem(props) {
  return (
    <SectionRoute
      path={props.match.path}
      external={StemExternal}
      internal={StemInternal}
      modified={StemModified}
      compare={StemCompare}
    />
  );
}

export default Stem;
