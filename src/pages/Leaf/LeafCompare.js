import React from "react";
import ImageView from "../../components/ImageView";

import leafCompareImg from "../../images/leafCompare.jpg";

const leafCompareData = {
  image: {
    src: leafCompareImg,
    alt: "Leaf compare",
    size: {
      width: 550,
      height: 347
    }
  },
  label: [
    {
      anchorPosition: {
        top: 15,
        left: 45
      },
      paperPosition: {
        top: 5,
        left: -20
      },
      text: "Mesophyll",
      description: "พืช C3 มี Mesophyll ชนิด Palisade",
      link: "/tissue/mesophyll"
    },
    {
      anchorPosition: {
        top: 69,
        left: 45
      },
      paperPosition: {
        top: 75,
        left: -20
      },
      text: "Mesophyll",
      description: "พืช C3 มี Mesophyll ชนิด Spongy",
      link: "/tissue/mesophyll"
    },
    {
      anchorPosition: {
        top: 42,
        left: 46
      },
      paperPosition: {
        top: 42,
        left: -20
      },
      text: "Bundle sheath",
      description: "พืช C3 Bundle sheath ไม่มี Chloroplast",
      link: "/tissue/bundle-sheath"
    },
    {
      anchorPosition: {
        top: 27,
        left: 98
      },
      paperPosition: {
        top: 20,
        left: 120
      },
      text: "Mesophyll",
      description: "พืช C4 มี Mesophyll ชนิดเดียว กระจายตัวทั่วใบ",
      link: "/tissue/mesophyll"
    },
    {
      anchorPosition: {
        top: 61,
        left: 98
      },
      paperPosition: {
        top: 65,
        left: 120
      },
      text: "Bundle sheath",
      description: "พืช C4 Bundle sheath มี Chloroplast",
      link: "/tissue/bundle-sheath"
    }
  ]
};

function LeafCompare(props) {
  return (
    <ImageView
      data={leafCompareData}
      title="เปรียบเทียบโครงสร้างใบพืช C3 กับ C4"
    />
  );
}

export default LeafCompare;
