import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  root: {
    position: "relative",
    minHeight: "25vw" // height while image is loading
  },
  progress: {
    position: "absolute",
    top: "50%",
    right: "50%"
  },
  img: {
    width: "100%",
    height: "100%"
  },
  loading: {
    "& $img": {
      opacity: 0
    }
  }
});

class LoadingImage extends Component {
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
    const classes = this.props.classes;
    return (
      <div
        className={classNames(
          classes.root,
          { [classes.loading]: !this.state.loaded },
          this.props.className
        )}
      >
        {this.state.loaded || (
          <CircularProgress
            className={classNames(
              classes.progress,
              this.props.progressClassName
            )}
          />
        )}
        <img
          className={classNames(classes.img, this.props.imgClassName)}
          src={this.props.src}
          alt={this.props.alt}
          onLoad={this.onLoadHandler}
        />
      </div>
    );
  }
}

export default withStyles(styles)(LoadingImage);
