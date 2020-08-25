import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Administration from "./pages/Administration/Administration";
import Department from "./pages/Department/Department";
import Automobile from "./pages/IndividualDept/Department";
import AutomobileStaff from "./pages/IndividualDept/Staff/Staff";
import Test from "./Test";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/administration" exact component={Administration} />
        <Route path="/departments" exact component={Department} />
        <Route path='/test' exact component={Test} />

        <Route path="/auto" exact component={Automobile} />
        <Route path="/staff" exact component={AutomobileStaff} />
      </Switch>
    </Router>
  );
}
