import React from "react";
import Markdown from "../../components/Markdown";

import rootTypeMarkdown from "./rootTypeMarkdown";
import rootTypePrimary from "../../images/rootTypePrimary.png";
import rootTypeFibrous from "../../images/rootTypeFibrous.png";

const rootTypeData = {
  markdown: rootTypeMarkdown,
  images: {
    rootTypePrimary,
    rootTypeFibrous
  }
};

function RootExternal(props) {
  return <Markdown data={rootTypeData} />;
}

export default RootExternal;
