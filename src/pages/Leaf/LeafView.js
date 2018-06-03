import React from "react";
import ImageView from "../../components/ImageView";

import leafViewImg from "../../images/leafView.jpg";

const leafViewData = {
  image: {
    src: leafViewImg,
    alt: "Leaf view",
    size: {
      width: 1002,
      height: 734
    }
  },
  label: [
    {
      anchorPosition: {
        top: 24,
        left: 95
      },
      paperPosition: {
        top: 15,
        left: 120
      },
      text: "Mesophyll",
      description: "Palisade mesophyll",
      link: "/tissue/mesophyll"
    },
    {
      anchorPosition: {
        top: 81,
        left: 96
      },
      paperPosition: {
        top: 81,
        left: 120
      },
      text: "Mesophyll",
      description: "Spongy mesophyll",
      link: "/tissue/mesophyll"
    },
    {
      anchorPosition: {
        top: 38,
        left: 100
      },
      paperPosition: {
        top: 38,
        left: 120
      },
      text: "Bundle sheath",
      link: "/tissue/bundle-sheath"
    }
  ]
};

function LeafView(props) {
  return <ImageView data={leafViewData} title="โครงสร้างใบ" />;
}

export default LeafView;
