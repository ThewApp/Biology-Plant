import React from "react";
import Markdown from "../../components/Markdown";

import rootTypeMarkdown from "./rootTypeMarkdown";

const rootTypeData = {
  markdown: rootTypeMarkdown,
  images: {}
};

function RootExternal(props) {
  return <Markdown data={rootTypeData} />;
}

export default RootExternal;
