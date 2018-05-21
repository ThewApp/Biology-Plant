import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const styles = theme => ({
  transitionGroup: {
    position: "relative",
  },
  fade: {
    "&-enter, &-appear": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      opacity: 0,
      transform: `translateY(${theme.spacing.unit * 2}px)`
    },
    "&-enter-active, &-appear-active": {
      zIndex: 1,
      opacity: 1,
      transform: "translateY(0)",
      transition:
        "transform .1s cubic-bezier(0,0,.6,1), opacity .1s cubic-bezier(0,0,.6,1)"
    },
    "&-exit": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      opacity: 1,
      transform: "translateY(0)"
    },
    "&-exit-active": {
      opacity: 0,
      transform: `translateY(${theme.spacing.unit * 2}px)`,
      transition:
        "transform .1s cubic-bezier(0,0,.6,1), opacity .1s cubic-bezier(0,0,.6,1)"
    }
  }
});

function RootAppTransition(props) {
  return (
    <TransitionGroup className={props.classes.transitionGroup}>
      <CSSTransition
        key={props.location.pathname}
        classNames={props.classes.fade}
        timeout={100}
        appear
      >
        {props.children}
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withStyles(styles)(RootAppTransition);
