import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    [theme.breakpoints.down("sm")] : {
      marginTop: theme.spacing.unit
    }
  },
  heading: {
    display: "flex",
    alignItems: "center"
  },
  headingIcon: {
    fontSize: "2rem",
    marginRight: ".25em"
  },
  subheading: {
    margin: ".5em 0"
  },
  body1: {
    marginBottom: theme.spacing.unit
  }
});

function MonocotInfo(props) {
  return (
    <Paper className={props.classes.root} component="section" aria-labelledby="info-heading">
      <Typography variant="headline" className={props.classes.heading} id="info-heading">
        <InfoIcon className={props.classes.headingIcon} />
        ข้อสังเกตรากพืชใบเลี้ยงเดี่ยว
      </Typography>
      <Typography variant="subheading" className={props.classes.subheading}>
        Stele เล็กกว่าหรือใหญ่กว่า Cortex
      </Typography>
      <Typography variant="body1" className={props.classes.body1}>
        เพราะอะไร เดี๋ยวมาใส่
      </Typography>
      <Divider />
      <Typography variant="subheading" className={props.classes.subheading}>
        ใบเลี้ยงเดี่ยวไม่มี Secondary Growth
      </Typography>
      <Button color="primary" disabled>
        Secondary Growth ของรากพืชใบเลี้ยงเดี่ยว
      </Button>
    </Paper>
  );
}

export default withStyles(styles)(MonocotInfo);
