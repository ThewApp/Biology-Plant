import React from "react";
import ImageView from "../../components/ImageView";

import leafCompareImg from "../../images/embryo.jpg";

const leafCompareData = {
    image: {
        src: leafCompareImg,
        alt: "External leaf view",
    },
    label: []
}

function LeafCompare(props) {
    return <ImageView data={leafCompareData} />;
}

export default LeafCompare;