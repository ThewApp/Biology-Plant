import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ImageView from "../../components/ImageView";

import stemExternalImg from "../../images/stem external.png";

const styles = theme => ({
  root: {
    position: "relative",
    zIndex: 1
  }
});

const StemExternalData = {
  image: {
    src: stemExternalImg,
    alt: "External stem view",
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
  return <ImageView data={StemExternalData} />;
}

export default withStyles(styles)(StemExternal);
