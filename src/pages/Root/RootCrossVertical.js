import React from "react";
import ImageView from "../../components/ImageView";

import rootCrossVerticalImg from "../../images/embryo.jpg";

const rootCrossVerticalData = {
  image: {
    src: rootCrossVerticalImg,
    alt: "Root vertical cross section view"
  },
  label: []
};

function RootCrossVertical(props) {
  return <ImageView data={rootCrossVerticalData} />;
}

export default RootCrossVertical;
