import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "./ListItem";

import embryoImg from "../../images/embryo.jpg";
import promeristemImg from "../../images/promeristem.jpg";
import primaryMeristemImg from "../../images/primary meristem.jpg";
import permanentTissueImg from "../../images/permanent tissue.jpg";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2
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
    image: embryoImg
  },
  {
    intro: "Embryo พัฒนาต่อเป็น...",
    title: "Promeristem",
    image: promeristemImg
  },
  {
    intro: "Promeristem พัฒนาต่อเป็น...",
    title: "Primary meristem",
    image: primaryMeristemImg,
    chips: [
      {
        label: "Protoderm",
        color: "#009933",
        image: embryoImg,
        alt: "protoderm พัฒนาต่อเป็น epidermis"
      },
      {
        label: "Ground meristem",
        color: "#3366cc",
        image: primaryMeristemImg,
        alt: "ground meristem พัฒนาต่อเป็น cortex"
      },
      {
        label: "Procambium",
        color: "#cc9900",
        image: primaryMeristemImg,
        alt: "procambium พัฒนาต่อเป็น stele"
      }
    ]
  },
  {
    intro: "Primary meristem พัฒนาต่อเป็น...",
    title: "Permanent tissue",
    image: permanentTissueImg,
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
    image: embryoImg,
    chips: [
      {
        label: "Cork cambium",
        color: "red",
        image: embryoImg,
        alt: "cork cambium พัฒนาต่อเป็น cork และ phelloderm"
      },
      {
        label: "Vascular cambium",
        color: "purple",
        image: embryoImg,
        alt:
          "vascular cambium พัฒนาต่อเป็น secondary phloem และ secondary xylem"
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
