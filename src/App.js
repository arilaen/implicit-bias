import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './containers/Home';
import About from './containers/About';
import ImplicitBiasTest from './containers/ImplicitBiasTest';

export default function App() {
  return (
    <Router>
      <div className="nav-and-content">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path={`/test/:testId`}>
            <ImplicitBiasTest />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
