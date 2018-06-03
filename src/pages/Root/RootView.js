import React from "react";
import ImageView from "../../components/ImageView";

import rootViewImg from "../../images/rootView.png";

const rootViewData = {
  image: {
    src: rootViewImg,
    alt: "Root view"
  },
  label: []
};

function RootView(props) {
  return <ImageView data={rootViewData} title="โครงสร้างราก" />;
}

export default RootView;
