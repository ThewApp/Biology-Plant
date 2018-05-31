import React from "react";
import ImageView from "../../components/ImageView";

import rootCrossHorizontalImg from "../../images/embryo.jpg";

const rootCrossHorizontalData = {
  image: {
    src: rootCrossHorizontalImg,
    alt: "Root horizontal cross section view"
  },
  label: []
};

function RootCrossHorizontal(props) {
  return <ImageView data={rootCrossHorizontalData} />;
}

export default RootCrossHorizontal;
