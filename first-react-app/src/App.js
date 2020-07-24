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

import './App.css';

class App extends React.Component {

  render() {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((myJson) => console.log(myJson))
      .catch((myErr) => console.error(myErr));


    return (
      <div className="App">
        <Router>
          <header>
            <Navigation />
          </header>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/forms" component={Forms} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
