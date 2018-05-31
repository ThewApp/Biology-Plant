import React from "react";
import ImageView from "../../components/ImageView";

import rootInternalImg from "../../images/rootInternal.png";

const rootExternalData = {
  image: {
    src: rootInternalImg,
    alt: "Internal root view"
  },
  label: []
};

function RootInternal(props) {
  return <ImageView data={rootExternalData} title="โครงสร้างภายในของราก" />;
}

export default RootInternal;
