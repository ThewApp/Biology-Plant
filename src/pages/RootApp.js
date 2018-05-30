import React from "react";
import SwitchTransition from "../components/SwitchTransition";
import { Route } from "react-router-dom";

import Overview from "./Overview";
import Stem from "./Stem";
import Root from "./Root";

function RootApp(props) {
  return (
    <main>
      <SwitchTransition>
        <Route exact path="/" component={Overview} />
        <Route path="/stem" component={Stem} />
        <Route path="/root" component={Root} />
        <Route render={() => <div>Not Found</div>} />
      </SwitchTransition>
    </main>
  );
}

export default RootApp;
