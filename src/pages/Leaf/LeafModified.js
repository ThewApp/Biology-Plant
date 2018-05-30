import React from "react";
import Markdown from "../../components/Markdown";

import leafModifiedMarkdown from "./leafModifiedMarkdown";
import leafModifiedTendril from "../../images/leafModifiedTendril.jpg";
import leafModifiedSpine from "../../images/leafModifiedSpine.jpg";
import leafModifiedStorage from "../../images/leafModifiedStorage.jpg";
import leafModifiedScale from "../../images/leafModifiedScale.jpg";
import leafModifiedPhyllode from "../../images/leafModifiedPhyllode.jpg";
import leafModifiedFloating from "../../images/leafModifiedFloating.jpg";
import leafModifiedReproduction from "../../images/leafModifiedReproduction.jpg";
import leafModifiedCarnivorous from "../../images/leafModifiedCarnivorous.jpg";

const leafModifiedData = {
  markdown: leafModifiedMarkdown,
  images: {
    leafModifiedTendril,
    leafModifiedSpine,
    leafModifiedStorage,
    leafModifiedScale,
    leafModifiedPhyllode,
    leafModifiedFloating,
    leafModifiedReproduction,
    leafModifiedCarnivorous
  }
};

function LeafModified(props) {
  return <Markdown data={leafModifiedData} />;
}

export default LeafModified;
