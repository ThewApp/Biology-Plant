import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SectionSelectorCard from "./SectionSelectorCard";

import embryoImg from "../../images/embryo.jpg";
import stemExternalImg from "../../images/stemExternal.png";
import stemInternalImg from "../../images/stemInternal.jpg";
import stemModifiedCladophyll from "../../images/stemModifiedCladophyll.jpg"
import rootModifiedPhotosynthesis from "../../images/rootModifiedPhotosynthesis.jpg"
import leafModifiedTendril from "../../images/leafModifiedTendril.jpg"

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  }
});

const partData = {
  stem: "ลำต้น",
  root: "ราก",
  leaf: "ใบ"
};

const imageData = {
  stem: {
    external: stemExternalImg,
    internal: stemInternalImg,
    modified: stemModifiedCladophyll,
    compare: embryoImg
  },
  root: {
    external: embryoImg,
    internal: embryoImg,
    modified: rootModifiedPhotosynthesis,
    compare: embryoImg
  },
  leaf: {
    external: embryoImg,
    internal: embryoImg,
    modified: leafModifiedTendril,
    compare: embryoImg
  }
};

function SectionSelector(props) {
  const part = props.match.path.slice(1);
  const partText = partData[part];
  const image = imageData[part];
  return (
    <div className={props.classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6} lg={3}>
          <SectionSelectorCard
            to={props.match.path + "/external"}
            title={`โครงสร้างภายนอกของ${partText}`}
            image={image.external}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <SectionSelectorCard
            to={props.match.path + "/internal"}
            title={`โครงสร้างภายในของ${partText}`}
            image={image.internal}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <SectionSelectorCard
            to={props.match.path + "/modified"}
            title={`${partText}ที่เปลี่ยนไปทำหน้าที่พิเศษ`}
            image={image.modified}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <SectionSelectorCard
            to={props.match.path + "/compare"}
            title={`เปรียบเทียบระหว่าง${partText}พืชใบเลี้ยงคู่และใบเลี้ยงเดี่ยว`}
            image={image.compare}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(SectionSelector);
