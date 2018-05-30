import React from "react";
import ImageView from "../../components/ImageView";

import rootCompareImg from "../../images/embryo.jpg";

const rootCompareData = {
    image: {
        src: rootCompareImg,
        alt: "External stem view",
    },
    label: []
}

function RootCompare(props) {
    return <ImageView data={rootCompareData} />;
}

export default RootCompare;