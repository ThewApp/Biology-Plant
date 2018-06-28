import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "./ListItem";

import overviewEmbryo from "../../images/overviewEmbryo.jpg";
import overviewPromeristem from "../../images/overviewPromeristem.jpg";
import overviewPrimaryMeristem from "../../images/overviewPrimaryMeristem.jpg";
import overviewPrimaryMeristemProtoderm from "../../images/overviewPrimaryMeristemProtoderm.jpg";
import overviewPrimaryMeristemGroundMeristem from "../../images/overviewPrimaryMeristemGroundMeristem.jpg";
import overviewPrimaryMeristemProcambium from "../../images/overviewPrimaryMeristemProcambium.jpg";
import overviewPermanentTissue from "../../images/overviewPermanentTissue.jpg";
import overviewSecondaryMeristem from "../../images/overviewSecondaryMeristem.jpg";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    position: "relative"
  },
  list: {
    [theme.breakpoints.up("sm")]: {
      width: "50vw"
    },
    listStyle: "none",
    margin: 0,
    padding: 0
  }
});

const data = [
  {
    intro: "พืชทุกต้น เริ่มจาก...",
    title: "Embryo",
    image: overviewEmbryo
  },
  {
    intro: "Embryo พัฒนาต่อเป็น...",
    title: "Promeristem",
    image: overviewPromeristem
  },
  {
    intro: "Promeristem พัฒนาต่อเป็น...",
    title: "Primary meristem",
    image: overviewPrimaryMeristem,
    chips: [
      {
        label: "Protoderm",
        color: "#009933",
        image: overviewPrimaryMeristemProtoderm,
        alt: "protoderm พัฒนาต่อเป็น epidermis"
      },
      {
        label: "Ground meristem",
        color: "#3366cc",
        image: overviewPrimaryMeristemGroundMeristem,
        alt: "ground meristem พัฒนาต่อเป็น cortex"
      },
      {
        label: "Procambium",
        color: "#cc9900",
        image: overviewPrimaryMeristemProcambium,
        alt: "procambium พัฒนาต่อเป็น stele"
      }
    ]
  },
  {
    intro: "Primary meristem พัฒนาต่อเป็น...",
    title: "Permanent tissue",
    image: overviewPermanentTissue,
    links: [
      {
        label: "Epidermis",
        color: "#009933",
        to: "tissue/epidermis"
      },
      {
        label: "Cortex",
        color: "#3366cc",
        to: "tissue/cortex"
      },
      {
        label: "Stele",
        color: "#cc9900",
        to: "tissue/stele"
      }
    ]
  },
  {
    intro: "พืชบางชนิด อาจมี...",
    title: "Secondary meristem",
    image: overviewSecondaryMeristem,
    links: [
      {
        label: "Cork cambium",
        color: "red",
        to: "tissue/cork-cambium"
      },
      {
        label: "Vascular cambium",
        color: "purple",
        to: "tissue/vascular-cambium"
      }
    ]
  }
];

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: 0
    };
    this.changeActiveList = this.changeActiveList.bind(this);
  }

  changeActiveList(e, index) {
    this.setState({
      activeList: index || Number(e.currentTarget.dataset.index)
    });
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <ol className={this.props.classes.list}>
          {data.map((obj, index) => (
            <ListItem
              key={obj.title}
              changeActiveList={this.changeActiveList}
              active={this.state.activeList === index}
              index={index}
              intro={obj.intro}
              title={obj.title}
              chips={obj.chips}
              links={obj.links}
              image={obj.image}
            />
          ))}
        </ol>
      </div>
    );
  }
}

export default withStyles(styles)(Overview);
