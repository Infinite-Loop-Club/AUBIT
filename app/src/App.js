import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Administration from "./pages/Administration/Administration";
import Courses from './pages/Courses/Courses';
import Department from "./pages/Department/Department";
import Library from "./pages/Library/Library";
import Placement from "./pages/Placement/Placement";
import Hostel from "./pages/Hostel/Hostel";
import StudentAffairs from "./pages/StudentAffairs/StudentAffairs";

import Test from "./Test";
import Automobile from "./pages/IndividualDept/Department";
import AutomobileStaff from "./pages/IndividualDept/Staff/Staff";



export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/administration" exact component={Administration} />
        <Route path="/departments" exact component={Department} />
        <Route path="/courses" exact component={Courses} />
        <Route path="/placement" exact component={Placement} />
        <Route path="/library" exact component={Library} />
        <Route path="/hostel" exact component={Hostel} />
        <Route path="/studentaffairs" exact component={StudentAffairs} />

        <Route path='/test' exact component={Test} />

        <Route path="/department/automobile" exact component={Automobile} />
        <Route path="/department/automobile/staff" exact component={AutomobileStaff} />
      </Switch>
    </Router>
  );
}
