import React from "react";
import ImageView from "../../components/ImageView";

import rootInternalImg from "../../images/embryo.jpg";

const rootExternalData = {
  image: {
    src: rootInternalImg,
    alt: "Internal root view"
  },
  label: []
};

function RootInternal(props) {
  return <ImageView data={rootExternalData} />;
}

export default RootInternal;
