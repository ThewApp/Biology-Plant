import React from "react";
import Markdown from "../../components/Markdown";

import rootModifiedMarkdown from "./rootModifiedMarkdown";
import rootModifiedProp from "../../images/rootModifiedProp.jpg";
import rootModifiedClimbing from "../../images/rootModifiedClimbing.jpg";
import rootModifiedPhotosynthesis from "../../images/rootModifiedPhotosynthesis.jpg";
import rootModifiedRespiration from "../../images/rootModifiedRespiration.jpg";
import rootModifiedParasitic from "../../images/rootModifiedParasitic.jpg";
import rootModifiedAerial from "../../images/rootModifiedAerial.png";
import rootModifiedFoodStorage from "../../images/rootModifiedFoodStorage.jpg";

const rootModifiedData = {
  markdown: rootModifiedMarkdown,
  images: {
    rootModifiedProp,
    rootModifiedClimbing,
    rootModifiedPhotosynthesis,
    rootModifiedRespiration,
    rootModifiedParasitic,
    rootModifiedAerial,
    rootModifiedFoodStorage
  }
};

function RootModified(props) {
  return <Markdown data={rootModifiedData} />;
}

export default RootModified;
