import React from "react";
import ImageView from "../../components/ImageView";

import rootViewImg from "../../images/rootView.png";

const rootExternalData = {
  image: {
    src: rootViewImg,
    alt: "Root view"
  },
  label: []
};

function RootView(props) {
  return <ImageView data={rootExternalData} title="โครงสร้างราก" />;
}

export default RootView;
