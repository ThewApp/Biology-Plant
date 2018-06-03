import React from "react";
import ImageView from "../../components/ImageView";

import stemExternalImg from "../../images/stemExternal.png";

const stemExternalData = {
  image: {
    src: stemExternalImg,
    alt: "External stem view",
    size: {
      width: 428,
      height: 533
    }
  },
  label: [
    {
      anchorPosition: {
        top: 36,
        left: 30
      },
      paperPosition: {
        top: 36,
        left: -20
      },
      text: "มีข้อปล้อง"
    },
    {
      anchorPosition: {
        top: 53,
        left: 70
      },
      paperPosition: {
        top: 53,
        left: 105
      },
      text: "มีตา"
    },
    {
      anchorPosition: {
        top: 8,
        left: 75
      },
      paperPosition: {
        top: 8,
        left: 105
      },
      text: "เจริญเข้าหาแสง"
    }
  ]
};

function StemExternal(props) {
  return <ImageView data={stemExternalData} title="โครงสร้างภายนอกของลำต้น" />;
}

export default StemExternal;
