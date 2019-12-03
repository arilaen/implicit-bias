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
        <nav class="red darken-4" role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About This</Link>
            </li>
            <li class="right">
              <Link to="https://tech.seas.harvard.edu/rad">Startup RAD class</Link>
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

        <footer class="page-footer grey">

            <div class="footer-copyright">
                <div class="container">
                    Made by <a class="grey-text text-lighten-3"
                    href="https://github.com/nouyang/">nouyang</a>
                for the ES95r class during Fall 2019, using <a
                class="grey-text text-lighten-3"
                href="http://materializecss.com">Materialize</a>
            and forked from <a class="grey-text
            text-lighten-3"
            href="https://github.com/chrisco210/Implicit">chrisco210</a>.

        </div>
    </div>


</footer>

      </div>

    </Router>
  );
}
