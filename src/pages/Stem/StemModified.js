import React from "react";
import Markdown from "../../components/Markdown";

import modifiedStemMarkdown from "./stemModified.md";
import stemModifiedCreeping from "../../images/stemModifiedCreeping.jpg";
import stemModifiedTwining from "../../images/stemModifiedTwining.png";
import stemModifiedTendril from "../../images/stemModifiedTendril.png";
import stemModifiedRootClimber from "../../images/stemModifiedRootClimber.png";
import stemModifiedSpine from "../../images/stemModifiedSpine.png";
import stemModifiedCladophyll from "../../images/stemModifiedCladophyll.jpg";
import stemModifiedBubil from "../../images/stemModifiedBubil.jpg";
import stemModifiedRhizome from "../../images/stemModifiedRhizome.jpg";
import stemModifiedTuber from "../../images/stemModifiedTuber.jpg";
import stemModifiedBulb from "../../images/stemModifiedBulb.jpg";
import stemModifiedCorm from "../../images/stemModifiedCorm.jpg";

const stemModifiedData = {
  markdown: modifiedStemMarkdown,
  images: {
    stemModifiedCreeping,
    stemModifiedTwining,
    stemModifiedTendril,
    stemModifiedRootClimber,
    stemModifiedSpine,
    stemModifiedCladophyll,
    stemModifiedBubil,
    stemModifiedRhizome,
    stemModifiedTuber,
    stemModifiedBulb,
    stemModifiedCorm
  }
};

function StemModified(props) {
  return <Markdown data={stemModifiedData} />;
}

export default StemModified;
