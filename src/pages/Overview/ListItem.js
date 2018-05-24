import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import Intro from "./Intro";
import Title from "./Title";
import ChipsImage from "./ChipsImage";
import ChipsLink from "./ChipsLink";
import Image from "./Image";

const styles = theme => ({
  listItem: {
    transition: "background-color .5s",
    padding: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 3,
    willChange: "background-color",
    "&.expand": {
      backgroundColor: theme.palette.primary.main
    }
  }
});

class ListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeLabel: null
    };

    this.setActiveLabel = this.setActiveLabel.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.active) {
      return { activeLabel: null };
    }
    return null;
  }

  setActiveLabel(e) {
    this.props.changeActiveList(e, this.props.index);
    const label = e.currentTarget.dataset.label;
    this.setState(prev => ({
      activeLabel: prev.activeLabel === label ? null : label
    }));
  }

  render() {
    let chips,
      images,
      links = null;
    if (this.props.chips) {
      chips = (
        <ChipsImage
          chips={this.props.chips}
          setActiveLabel={this.setActiveLabel}
          activeLabel={this.state.activeLabel}
        />
      );
      images = this.props.chips.map(obj => (
        <Image
          key={obj.label}
          src={obj.image}
          alt={obj.alt}
          active={this.state.activeLabel === obj.label}
        />
      ));
    } else if (this.props.links) {
      links = <ChipsLink links={this.props.links} />
    }
    return (
      <li
        className={
          this.props.classes.listItem + (this.props.active ? " expand" : "")
        }
      >
        <Intro>{this.props.intro}</Intro>
        <Title onClick={this.props.changeActiveList} index={this.props.index}>
          {this.props.title}
        </Title>
        {chips}
        {links}
        <Image
          src={this.props.image}
          alt={this.props.title}
          active={!this.state.activeLabel}
        />
        {images}
      </li>
    );
  }
}

export default withStyles(styles)(ListItem);
