import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from './Navigation'
import Home from './Home';
import About from './About';
import Forms from './Forms';
import DataIterator from './DataIterator';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <Navigation />
          </header>

          <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/forms" component={Forms} />
            <Route path="/iteratingdata" component={DataIterator} />
          </Switch>
          </div>
          
        </Router>
      </div>
    )
  }
}

export default App;
