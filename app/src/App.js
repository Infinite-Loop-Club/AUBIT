import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Administration from "./pages/Administration/Administration";
import Department from "./pages/Department/Department";
import Automobile from "./pages/IndividualDept/Department";
// import Test from "./Test";
import Gallery from './components/Gallery';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/administration" exact component={Administration} />
        <Route path="/departments" exact component={Department} />
        <Route path='/test' exact component={Gallery} />


        <Route path="/auto" exact component={Automobile} />
      </Switch>
    </Router>
  );
}
