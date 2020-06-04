import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../App";
import Home from "../component/home";
import About from "../component/about";
import Contact from "../component/contact";

class RouteComponent extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Route>
      </Router>
    );
  }
}

export default RouteComponent;
