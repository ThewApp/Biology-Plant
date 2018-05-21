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
    padding: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 3,
    "&.active": {
      backgroundColor: theme.palette.primary.main
    },
    "&.active $hide": {
      height: theme.typography.display1.lineHeight,
      opacity: 1,
      transform: "translateX(0)",
      pointerEvents: "auto"
    }
  },
  hide: {
    height: 0,
    opacity: 0,
    transform: "translateX(-20px)",
    willChange: ["height", "opacity", "transform"],
    transition: ["height .5s", "opacity .5s", "transform .5s"],
    color: theme.palette.common.white,
    pointerEvents: "none"
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
        <Title onClick={e => props.changeActiveList(0, e)}>Embryo</Title>
        <Image src={embryoImg} alt="Embryo" />
      </li>
      <li
        className={
          props.classes.listItem + (props.activeList === 1 ? " active" : "")
        }
      >
        <Typography variant="headline" className={props.classes.hide}>
          Embryo พัฒนาต่อเป็น...
        </Typography>
        <Title onClick={e => props.changeActiveList(1, e)}>Promeristem</Title>
        <Image src={promeristemImg} alt="Promeristem" />
      </li>
      <li
        className={
          props.classes.listItem + (props.activeList === 2 ? " active" : "")
        }
      >
        <Typography variant="headline" className={props.classes.hide}>
          Promeristem พัฒนาต่อเป็น...
        </Typography>
        <Title onClick={e => props.changeActiveList(2, e)}>
          Primary meristem
        </Title>
        <Chips
          hideClass={props.classes.hide}
          first="Protoderm"
          second="Ground meristem"
          third="Procambium"
          firstClick={e => props.changeActiveList(0, e)}
          secondClick={e => props.changeActiveList(1, e)}
          thirdClick={e => props.changeActiveList(2, e)}
        />
        <Image src={primaryMeristemImg} alt="Primary meristem" />
      </li>
      <li
        className={
          props.classes.listItem + (props.activeList === 3 ? " active" : "")
        }
      >
        <Typography variant="headline" className={props.classes.hide}>
          Primary meristem พัฒนาต่อเป็น...
        </Typography>
        <Title onClick={e => props.changeActiveList(3, e)}>
          Permanent tissue
        </Title>
        <Chips
          hideClass={props.classes.hide}
          first="Epidermis"
          second="Cortex"
          third="Stele"
          firstClick={e => props.changeActiveList(0, e)}
          secondClick={e => props.changeActiveList(0, e)}
          thirdClick={e => props.changeActiveList(0, e)}
        />
        <Image src={permanentTissueImg} alt="Permanent tissue" />
      </li>
    </ol>
  );
}

export default withStyles(styles)(Lists);
