import React from "react";
import SwitchTransition from "../components/SwitchTransition";
import { Route } from "react-router-dom";

import Overview from "./Overview";
import Stem from "./Stem";
import Root from "./Root";
import Leaf from "./Leaf";
import Tissue from "./Tissue";

function RootApp(props) {
  return (
    <main>
      <SwitchTransition>
        <Route exact path="/" component={Overview} />
        <Route path="/stem" component={Stem} />
        <Route path="/root" component={Root} />
        <Route path="/leaf" component={Leaf} />
        <Route path="/tissue" component={Tissue} />
        <Route render={() => <div>Not Found</div>} />
      </SwitchTransition>
    </main>
  );
}

export default RootApp;
