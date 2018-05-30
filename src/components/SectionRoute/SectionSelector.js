import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SectionSelectorCard from "./SectionSelectorCard";

import embryoImg from "../../images/embryo.jpg";
import stemExternalImg from "../../images/stemExternal.png";
import stemInternalImg from "../../images/stemInternal.jpg";
import stemModifiedCladophyll from "../../images/stemModifiedCladophyll.jpg";
import rootModifiedPhotosynthesis from "../../images/rootModifiedPhotosynthesis.jpg";
import leafModifiedTendril from "../../images/leafModifiedTendril.jpg";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  }
});

const sectionData = {
  stem: [
    {
      title: "โครงสร้างภายนอกของลำต้น",
      path: "/external",
      image: stemExternalImg
    },
    {
      title: "โครงสร้างภายในของลำต้น",
      path: "/internal",
      image: stemInternalImg
    },
    {
      title: "ลำต้นที่เปลี่ยนไปทำหน้าที่พิเศษ",
      path: "/modified",
      image: stemModifiedCladophyll
    },
    {
      title: "เปรียบเทียบระหว่างลำต้นพืชใบเลี้ยงคู่และใบเลี้ยงเดี่ยว",
      path: "/compare",
      image: embryoImg
    }
  ],
  root: [
    {
      title: "โครงสร้างภายนอกของราก",
      path: "/external",
      image: embryoImg
    },
    {
      title: "โครงสร้างภายในของราก",
      path: "/internal",
      image: embryoImg
    },
    {
      title: "รากที่เปลี่ยนไปทำหน้าที่พิเศษ",
      path: "/modified",
      image: rootModifiedPhotosynthesis
    },
    {
      title: "เปรียบเทียบระหว่างรากพืชใบเลี้ยงคู่และใบเลี้ยงเดี่ยว",
      path: "/compare",
      image: embryoImg
    }
  ],
  leaf: [
    {
      title: "โครงสร้างภายนอกของใบ",
      path: "/external",
      image: embryoImg
    },
    {
      title: "โครงสร้างภายในของใบ",
      path: "/internal",
      image: embryoImg
    },
    {
      title: "ใบที่เปลี่ยนไปทำหน้าที่พิเศษ",
      path: "/modified",
      image: leafModifiedTendril
    }
  ]
};

function SectionSelector(props) {
  const part = props.match.path.slice(1);
  const cards = sectionData[part];
  return (
    <div className={props.classes.root}>
      <Grid container spacing={16}>
        {cards.map(obj => (
          <Grid key={obj.path} item xs={12} sm={6} lg={3}>
            <SectionSelectorCard
              to={props.match.path + obj.path}
              title={obj.title}
              image={obj.image}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(SectionSelector);
