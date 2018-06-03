import React from "react";
import ImageView from "../../components/ImageView";

import leafInternalImg from "../../images/overviewEmbryo.jpg";

const leafExternalData = {
  image: {
    src: leafInternalImg,
    alt: "Internal leaf view"
  },
  label: []
};

function LeafInternal(props) {
  return <ImageView data={leafExternalData} />;
}

export default LeafInternal;
