import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SectionSelectorCard from "./SectionSelectorCard";

import stemExternalImg from "../../images/stemExternal.png";
import stemInternalImg from "../../images/stemInternal.jpg";
import stemModifiedCladophyll from "../../images/stemModifiedCladophyll.jpg";
import stemCompare from "../../images/stemCompare.jpg";
import rootTypePrimary from "../../images/rootTypePrimary.png";
import rootView from "../../images/rootView.png";
import rootModifiedPhotosynthesis from "../../images/rootModifiedPhotosynthesis.jpg";
import rootCompare from "../../images/rootCompare.jpg";
import leafView from "../../images/leafView.jpg";
import leafModifiedTendril from "../../images/leafModifiedTendril.jpg";
import leafCompare from "../../images/leafCompare.jpg";

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
      image: stemCompare
    }
  ],
  root: [
    {
      title: "ชนิดของราก",
      path: "/type",
      image: rootTypePrimary
    },
    {
      title: "โครงสร้างราก",
      path: "/view",
      image: rootView
    },
    {
      title: "รากที่เปลี่ยนไปทำหน้าที่พิเศษ",
      path: "/modified",
      image: rootModifiedPhotosynthesis
    },
    {
      title: "เปรียบเทียบระหว่างรากพืชใบเลี้ยงคู่และใบเลี้ยงเดี่ยว",
      path: "/compare",
      image: rootCompare
    }
  ],
  leaf: [
    {
      title: "โครงสร้างใบ",
      path: "/view",
      image: leafView
    },
    {
      title: "ใบที่เปลี่ยนไปทำหน้าที่พิเศษ",
      path: "/modified",
      image: leafModifiedTendril
    },
    {
      title: "เปรียบเทียบโครงสร้างใบพืช C3 กับ C4",
      path: "/compare",
      image: leafCompare
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
