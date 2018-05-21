import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Expansion from "../../components/Expansion";

import epidermisImg from "../../images/epidermis.png";

const styles = theme => ({
  root: {}
});

function MonocotExpansion(props) {
  return (
    <section className={props.classes.root} aria-label="ชั้นต่างๆ">
      <Expansion
        title="Epidermis"
        details="ชั้นที่อยู่นอกสุด"
        detailsImg={epidermisImg}
        included={["Epidermis"]}
        defaultExpanded
      />
      <Expansion
        title="Cortex"
        details="ชั้นที่อยู่ตรงกลาง"
        detailsImg={epidermisImg}
        included={["Epidermis"]}
      />
      <Expansion
        title="Stele"
        details="ชั้นที่อยู่ในสุด"
        detailsImg={epidermisImg}
        included={["Epidermis"]}
      />
    </section>
  );
}

export default withStyles(styles)(MonocotExpansion);
