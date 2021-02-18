import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/index" component={Index} />
        <Route exact path="/" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
