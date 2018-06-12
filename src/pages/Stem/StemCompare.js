import React from "react";
import ImageView from "../../components/ImageView";

import stemCompareImg from "../../images/stemCompare.jpg";

const stemCompareData = {
  image: {
    src: stemCompareImg,
    alt: "Compare stem view"
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
      text: "ภาพตัดขวางลำต้นใบเลี้ยงเดี่ยว",
    },
    {
      anchorPosition: {
        top: 43,
        left: 28
      },
      paperPosition: {
        top: 43,
        left: -20
      },
      text: "มัดท่อลำเลียง",
      description: "กระจายทั่วลำต้น",
      link: "/tissue/vascular-bundle"
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
      text: "ภาพตัดขวางลำต้นใบเลี้ยงคู่",
    },
    {
      anchorPosition: {
        top: 15,
        left: 52
      },
      paperPosition: {
        top: 20,
        left: 110
      },
      text: "Phloem",
      description: "เรียงตัวอยู่ทางด้านนอก",
      link: "/tissue/phloem"
    },
    {
      anchorPosition: {
        top: 68,
        left: 76
      },
      paperPosition: {
        top: 68,
        left: 110
      },
      text: "มี Vascular cambium",
      description: "คั่นระหว่าง Xylem กับ Phloem ทำให้เกิด Secondary growth",
      link: "/tissue/vascular-cambium"
    },
    {
      anchorPosition: {
        top: 46,
        left: 78
      },
      paperPosition: {
        top: 46,
        left: 110
      },
      text: "Xylem",
      description: "เรียงตัวอยู่ด้านใน",
      link: "/tissue/xylem"
    }
  ]
};

function StemCompare(props) {
  return (
    <ImageView
      data={stemCompareData}
      title="เปรียบเทียบลำต้นใบเลี้ยงคู่และใบเลี้ยงเดี่ยว"
    />
  );
}

export default StemCompare;
