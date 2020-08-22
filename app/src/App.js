import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from './components/Gallery';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/test' exact component={Gallery} />
      </Switch>
    </Router>
  );
}
