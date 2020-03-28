import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Home } from './Home';
import { Header } from './Header';
import { About } from './About';
import { Projects } from './Projects';

function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
