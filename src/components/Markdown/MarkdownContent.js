import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import marked from "marked";

const styles = theme => ({
  progress: {
    display: "block",
    margin: "0 auto",
    marginTop: theme.spacing.unit * 5
  },
  markdown: {
    margin: "0 auto",
    marginTop: theme.spacing.unit * 3,
    width: "95vw",
    [theme.breakpoints.up("sm")]: {
      width: "80vw"
    },
    [theme.breakpoints.up("lg")]: {
      width: "60vw"
    },
    fontFamily: theme.typography.fontFamily,
    "& h1": {
      ...theme.typography.display2,
      lineHeight: "1.3em",
      margin: "0.5em 0"
    },
    "& h2": {
      ...theme.typography.display1,
      lineHeight: "1.2em",
      margin: "0.5em 0"
    },
    "& h3": {
      ...theme.typography.headline,
      lineHeight: "1.1em",
      margin: "0.5em 0"
    },
    "& p, & ul, & ol": {
      lineHeight: 1.6
    },
    "& img": {
      maxWidth: "75%",
      margin: "0 auto",
      display: "block"
    }
  }
});

const renderer = new marked.Renderer();

renderer.heading = function(text, level) {
  var escapedText = text.toLowerCase().replace(/[^\w\u0E00-\u0E7F]+/g, "-"); // \u0E00-\u0E7F is Thai unicode block
  return `
            <h${level} id="${escapedText}">
              ${text}
            </h${level}>`;
};

marked.setOptions({
  renderer
});

function extractImage(text, images) {
  const reg = /(!\[.+\]\()([\w]+)(\))/g;
  const finalMarkdown = text.replace(
    reg,
    (match, p1, p2, p3) => p1 + images[p2] + p3
  );
  return finalMarkdown;
}

class MarkdownContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    };
  }

  componentDidMount() {
    fetch(this.props.source.markdown)
      .then(response => response.text())
      .then(text => {
        const finalMarkdown = extractImage(text, this.props.source.images);
        this.setState({ markdown: finalMarkdown });
        window.scrollTo(0, 0);
      });
  }

  render() {
    if (this.state.markdown === "") {
      return <CircularProgress className={this.props.classes.progress} />;
    }
    return (
      <div
        className={this.props.classes.markdown}
        dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
      />
    );
  }
}

export default withStyles(styles)(MarkdownContent);
