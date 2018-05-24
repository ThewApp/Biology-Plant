import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Lists from "./Lists";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2
  }
});

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: 0,
      image: null
    };
    this.changeActiveList = this.changeActiveList.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  changeActiveList(e) {
    this.setState({
      activeList: Number(e.currentTarget.dataset.list),
      image: null
    });
  }

  setImage(e) {
    const list = e.currentTarget.dataset.list;
    const image = e.currentTarget.dataset.image;
    this.setState(prev => ({
      activeList: Number(list),
      image: prev.image === image ? null : image
    }));
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.wrapper}>
          <Lists
            activeList={this.state.activeList}
            image={this.state.image}
            changeActiveList={this.changeActiveList}
            setImage={this.setImage}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Overview);
