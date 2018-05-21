import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Lists from "./Lists";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 5,
  }
});

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: 0
    };
    this.changeActiveList = this.changeActiveList.bind(this);
  }

  changeActiveList(e) {
    this.setState({ activeList: Number(e.currentTarget.dataset.list) });
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.wrapper}>
          <Lists
            activeList={this.state.activeList}
            changeActiveList={this.changeActiveList}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Overview);
