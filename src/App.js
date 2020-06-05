import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </HashRouter>
  );
}

export default App;
