import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Home } from "./../pages/Home";
import { Settings } from "./../pages/Settings";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/settings">
        <Settings />
      </Route>

      <Route>
        <div>
          <h1>404.</h1>
          <h3>Go Somewhere Else. 😠</h3>
        </div>
      </Route>
    </Switch>
  );
}

export default App;