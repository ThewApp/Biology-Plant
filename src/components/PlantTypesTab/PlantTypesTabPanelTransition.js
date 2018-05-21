import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { CSSTransition } from "react-transition-group";

const styles = theme => ({
  exit: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    transition: [["transform .3s cubic-bezier(.4,0,.2,1)"], ["opacity .2s"]],
    willChange: ["transform", "opacity"],
    transform: "translateX(0)",
    opacity: 1,
    "&.left": {
      transform: "translateX(-15%)",
      opacity: 0
    },
    "&.right": {
      transform: "translateX(15%)",
      opacity: 0
    }
  },
  enter: {
    transition: [["transform .3s cubic-bezier(.4,0,.2,1)"], ["opacity .2s"]],
    willChange: ["transform", "opacity"],
    "&.right": {
      transform: "translateX(-15%)",
      opacity: 0
    },
    "&.left": {
      transform: "translateX(15%)",
      opacity: 0
    },
    "&$active": {
      transform: "translateX(0)",
      opacity: 1
    }
  },
  active: {},
  hidden: { display: "none" }
});

function PlantTypesTabPanelTransition(props) {
  const defaultClassname = props.defaultActive
    ? props.classes.active
    : props.classes.hidden;
  const classNames = {
    enter: props.classes.enter + " " + props.direction,
    enterActive: props.classes.active,
    enterDone: props.classes.active,
    exit: props.classes.exit,
    exitActive: props.direction,
    exitDone: props.classes.hidden
  };
  return (
      <CSSTransition in={props.active} classNames={classNames} timeout={300}>
        <div
          role="tabpanel"
          className={defaultClassname}
          aria-hidden={!props.active}
          aria-labelledby={props.ariaLabelledby}
          id={props.id}
        >
          {props.children}
        </div>
      </CSSTransition>
  );
}

export default withStyles(styles)(PlantTypesTabPanelTransition);
