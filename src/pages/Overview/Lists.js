import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import Chips from "./Chips";
import Image from "./Image";

import embryoImg from "../../images/embryo.jpg";
import promeristemImg from "../../images/promeristem.jpg";
import primaryMeristemImg from "../../images/primary meristem.jpg";
import permanentTissueImg from "../../images/permanent tissue.jpg";

const styles = theme => ({
  list: {
    [theme.breakpoints.up("sm")]: {
      width: "50vw"
    },
    listStyle: "none",
    margin: 0,
    padding: 0
  },
  listItem: {
    transition: "background-color .5s",
    padding: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 3,
    willChange: "background-color",
    "&.active": {
      backgroundColor: theme.palette.primary.main
    },
    "&.active $hide": {
      color: theme.palette.common.white,
      [theme.breakpoints.up("sm")]: {
        height: theme.typography.display1.lineHeight,
        opacity: 1,
        transform: "translateX(0)",
        pointerEvents: "auto"
      }
    }
  },
  hide: {
    [theme.breakpoints.only("xs")]: {
      color: theme.typography.display1.color
    },
    [theme.breakpoints.up("sm")]: {
      height: 0,
      opacity: 0,
      transform: "translateX(-20px)",
      willChange: ["height", "opacity", "transform"],
      transition: ["height .5s", "opacity .5s", "transform .5s"],
      color: theme.palette.common.white,
      pointerEvents: "none"
    }
  }
});

function Lists(props) {
  return (
    <ol className={props.classes.list}>
      <li
        className={
          props.classes.listItem + (props.activeList === 0 ? " active" : "")
        }
      >
        <Typography variant="headline" className={props.classes.hide}>
          พืชทุกต้น เริ่มจาก...
        </Typography>
        <Title onClick={props.changeActiveList} data-list="0">
          Embryo
        </Title>
        <Image src={embryoImg} alt="Embryo" active={!props.image} />
      </li>
      <li
        className={
          props.classes.listItem + (props.activeList === 1 ? " active" : "")
        }
      >
        <Typography variant="headline" className={props.classes.hide}>
          Embryo พัฒนาต่อเป็น...
        </Typography>
        <Title onClick={props.changeActiveList} data-list="1">
          Promeristem
        </Title>
        <Image src={promeristemImg} alt="Promeristem" active={!props.image} />
      </li>
      <li
        className={
          props.classes.listItem + (props.activeList === 2 ? " active" : "")
        }
      >
        <Typography variant="headline" className={props.classes.hide}>
          Promeristem พัฒนาต่อเป็น...
        </Typography>
        <Title onClick={props.changeActiveList} data-list="2">
          Primary meristem
        </Title>
        <Chips
          hideClass={props.classes.hide}
          first="Protoderm"
          second="Ground meristem"
          third="Procambium"
          list="2"
          onClick={props.setImage}
          firstImage="protoderm"
          secondImage="ground-meristem"
          thirdImage="procambium"
          image={props.image}
        />
        <Image
          src={primaryMeristemImg}
          alt="Primary meristem"
          active={!props.image}
        />
        <Image
          src={primaryMeristemImg}
          alt="protoderm พัฒนาต่อเป็น epidermis"
          active={props.image === "protoderm"}
        />
        <Image
          src={primaryMeristemImg}
          alt="ground meristem พัฒนาต่อเป็น cortex"
          active={props.image === "ground-meristem"}
        />
        <Image
          src={primaryMeristemImg}
          alt="procambium พัฒนาต่อเป็น stele"
          active={props.image === "procambium"}
        />
      </li>
      <li
        className={
          props.classes.listItem + (props.activeList === 3 ? " active" : "")
        }
      >
        <Typography variant="headline" className={props.classes.hide}>
          Primary meristem พัฒนาต่อเป็น...
        </Typography>
        <Title onClick={props.changeActiveList} data-list="3">
          Permanent tissue
        </Title>
        <Chips
          hideClass={props.classes.hide}
          first="Epidermis"
          second="Cortex"
          third="Stele"
          firstTo="tissue/epidermis"
          secondTo="tissue/cortex"
          thirdTo="tissue/stele"
        />
        <Image
          src={permanentTissueImg}
          alt="Permanent tissue"
          active={!props.image}
        />
      </li>
      <li
        className={
          props.classes.listItem + (props.activeList === 4 ? " active" : "")
        }
      >
        <Typography variant="headline" className={props.classes.hide}>
          พืชบางชนิด อาจมี...
        </Typography>
        <Title onClick={props.changeActiveList} data-list="4">
          Secondary meristem
        </Title>
        <Chips
          hideClass={props.classes.hide}
          first="Cork cambium"
          second="Vascular cambium"
          list="4"
          onClick={props.setImage}
          firstImage="cork-cambium"
          secondImage="vascular-cambium"
          image={props.image}
        />
        <Image
          src={permanentTissueImg}
          alt="Permanent tissue"
          active={!props.image}
        />
        <Image
          src={embryoImg}
          alt="cork cambium พัฒนาต่อเป็น cork และ phelloderm"
          active={props.image === "cork-cambium"}
        />
        <Image
          src={permanentTissueImg}
          alt="vascular cambium พัฒนาต่อเป็น secondary phloem และ secondary xylem"
          active={props.image === "vascular-cambium"}
        />
      </li>
    </ol>
  );
}

export default withStyles(styles)(Lists);
