import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Image from "./Image";
import Chips from "./Chips";

const styles = theme => ({
  expanded: {
    margin: "8px 0"
  },
  expansionPanelDetails: {
    flexDirection: "column"
  },
  expansionPanelDetailsTypo: {
    marginBottom: theme.spacing.unit
  }
});

function Expansion(props) {
  return (
    <ExpansionPanel
      defaultExpanded={props.defaultExpanded}
      classes={{ expanded: props.classes.expanded }}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="headline" className={props.classes.heading}>
          {props.title}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={props.classes.expansionPanelDetails}>
        <Typography className={props.classes.expansionPanelDetailsTypo}>
          {props.details}
        </Typography>
        <Image src={props.detailsImg} alt={props.title} />
        <Chips included={props.included} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default withStyles(styles)(Expansion);
