import React from "react";
import RootAppTransition from "../components/RootAppTransition";
import { Switch, Route } from "react-router-dom";

import Overview from "./Overview";
import Stem from "./Stem";

function RootApp(props) {
  return (
    <main>
      <Route
        render={route => (
          <RootAppTransition {...route}>
            <Switch location={route.location}>
              <Route exact path="/" component={Overview} />
              <Route path="/stem" component={Stem} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </RootAppTransition>
        )}
      />
    </main>
  );
}

export default RootApp;
