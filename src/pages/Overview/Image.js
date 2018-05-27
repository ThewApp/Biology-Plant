import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    position: "relative",
    display: "block",
    maxWidth: "300px",
    height: 0,
    margin: "0 auto",
    opacity: 0,
    ".expand &.activeImg": {
      opacity: 1,
      height: "300px"
    },
    transition: [["opacity .5s"], ["height .5s"]],
    willChange: ["opacity", "height"],
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      top: theme.spacing.unit * 2,
      right: 0,
      maxWidth: "300px",
      transition: "opacity .5s",
      willChange: "opacity",
      ".expand &.activeImg": {
        height: "inherit"
      }
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "480px"
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "600px",
      right: "2vw"
    }
  },
  img: {
    width: "100%",
    height: "100%"
  },
  loading: {
    "& $img": {
      opacity: 0
    }
  },
  progress: {
    [theme.breakpoints.only("xs")]: {
      color: theme.palette.common.white
    },
    position: "absolute",
    top: "100px",
    left: "45%"
  }
});

class Image extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };

    this.onLoadHandler = this.onLoadHandler.bind(this);
  }

  onLoadHandler() {
    this.setState({ loaded: true });
  }

  render() {
    return (
      <div
        className={
          this.props.classes.root +
          (this.props.active ? " activeImg" : "") +
          (this.state.loaded ? "" : ` ${this.props.classes.loading}`)
        }
      >
        {this.state.loaded || <CircularProgress className={this.props.classes.progress} />}
        <img
          className={this.props.classes.img}
          src={this.props.src}
          alt={this.props.alt}
          onLoad={this.onLoadHandler}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Image);
