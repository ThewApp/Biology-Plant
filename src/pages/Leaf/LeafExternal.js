import React from "react";
import ImageView from "../../components/ImageView";

import leafExternalImg from "../../images/embryo.jpg";

const leafExternalData = {
  image: {
    src: leafExternalImg,
    alt: "External leaf view"
  },
  label: []
};

function LeafExternal(props) {
  return <ImageView data={leafExternalData} />;
}

export default LeafExternal;
