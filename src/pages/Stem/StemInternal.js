import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ImageView from "../../components/ImageView";

import stemInternalImg from "../../images/stem internal.jpg";

const styles = theme => ({
  root: {
    position: "relative",
    zIndex: 1
  }
});

const StemExternalData = {
  image: {
    src: stemInternalImg,
    alt: "Internal stem view"
  },
  label: [
    {
      anchorPosition: {
        top: 30,
        left: 20
      },
      paperPosition: {
        top: 35,
        left: -20
      },
      text: "Cortex",
      description: "แคบกว่าในราก",
      link: "/tissue/cortex"
    },
    {
      anchorPosition: {
        top: 40,
        left: 44
      },
      paperPosition: {
        top: 40,
        left: 105
      },
      text: "Stele",
      description: "กว้างกว่าในราก",
      link: "/tissue/stele"
    },
    {
      anchorPosition: {
        top: 53,
        left: 53
      },
      paperPosition: {
        top: 60,
        left: 105
      },
      text: "ไม่มี Pericycle",
      link: "/tissue/pericycle"
    },
    {
      anchorPosition: {
        top: 11,
        left: 31
      },
      paperPosition: {
        top: 7,
        left: -20
      },
      text: "Epidermis",
      description: "เซลล์เรียงตัวชั้นเดียวอยู่ที่ผิวด้านนอก",
      link: "/tissue/epidermis"
    },
    {
      anchorPosition: {
        top: 33,
        left: 49
      },
      paperPosition: {
        top: 27,
        left: 105
      },
      text: "Parenchyma",
      link: "/tissue/parenchyma"
    },
    {
      anchorPosition: {
        top: 51,
        left: 25
      },
      paperPosition: {
        top: 60,
        left: -20
      },
      text: "Vascular bundle",
      link: "/tissue/vascula-bundle"
    }
  ]
};

function StemInternal(props) {
  return <ImageView data={StemExternalData} />;
}

export default withStyles(styles)(StemInternal);
