import React from "react";
import ImageView from "../../components/ImageView";

import stemCompareImg from "../../images/embryo.jpg";

const stemCompareData = {
    image: {
        src: stemCompareImg,
        alt: "External stem view",
    },
    label: []
}

function StemCompare(props) {
    return <ImageView data={stemCompareData} />;
}

export default StemCompare;