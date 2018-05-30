import React from "react";
import ImageView from "../../components/ImageView";

import rootExternalImg from "../../images/embryo.jpg";

const rootExternalData = {
  image: {
    src: rootExternalImg,
    alt: "External root view"
  },
  label: []
};

function RootExternal(props) {
  return <ImageView data={rootExternalData} />;
}

export default RootExternal;
