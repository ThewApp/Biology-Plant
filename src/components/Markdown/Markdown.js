import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MarkdownContent from "./MarkdownContent";

const styles = theme => ({});

function Markdown(props) {
  if (typeof this.props.data === "object") {
    return <MarkdownContent source={this.props.data} />;
  }
}

export default withStyles(styles)(Markdown);
