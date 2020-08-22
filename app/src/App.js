import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./pages/Home";
import Administration from "./pages/Administration/Administration";
import Test from "./Test";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/administration" exact component={Administration} />
        <Route path="/test" exact component={Test} />
      </Switch>
    </Router>
  );
}

