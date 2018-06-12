import React from "react";
import ImageView from "../../components/ImageView";

import rootCompareImg from "../../images/rootCompare.jpg";

const rootCompareData = {
  image: {
    src: rootCompareImg,
    alt: "Compare root view"
  },
  label: [
    {
      anchorPosition: {
        top: 7,
        left: 40
      },
      paperPosition: {
        top: 5,
        left: 0
      },
      text: "ภาพตัดขวางรากใบเลี้ยงเดี่ยว"
    },
    {
      anchorPosition: {
        top: 51,
        left: 47
      },
      paperPosition: {
        top: 51,
        left: -20
      },
      text: "ตรงกลางเป็น Parenchyma",
      link: "/tissue/parenchyma"
    },
    {
      anchorPosition: {
        top: 44,
        left: 42
      },
      paperPosition: {
        top: 32,
        left: -20
      },
      text: "Xylem",
      description: "เรียกเป็นแฉก แฉกมีจำนวนมาก",
      link: "/tissue/xylem"
    },
    {
      anchorPosition: {
        top: 59,
        left: 39
      },
      paperPosition: {
        top: 66,
        left: -20
      },
      text: "Phloem",
      description: "อยู่ระหว่างแฉก Xylem",
      link: "/tissue/phloem"
    },
    {
      anchorPosition: {
        top: 7,
        left: 60
      },
      paperPosition: {
        top: 5,
        left: 100
      },
      text: "ภาพตัดขวางรากใบเลี้ยงคู่"
    },
    {
      anchorPosition: {
        top: 51,
        left: 51
      },
      paperPosition: {
        top: 51,
        left: 120
      },
      text: "ตรงกลางเป็น Xylem",
      description: "เรียกเป็นแฉก แฉกมีจำนวนน้อย",
      link: "/tissue/xylem"
    },
    {
      anchorPosition: {
        top: 43.5,
        left: 51
      },
      paperPosition: {
        top: 35,
        left: 120
      },
      text: "Phloem",
      description: "อยู่ระหว่างแฉก Xylem",
      link: "/tissue/phloem"
    }
  ]
};

function RootCompare(props) {
  return (
    <ImageView
      data={rootCompareData}
      title="เปรียบเทียบรากใบเลี้ยงคู่และใบเลี้ยงเดี่ยว"
    />
  );
}

export default RootCompare;
