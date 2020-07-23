import React from 'react';
import logo from './logo.svg';
import CounterButton from './CounterButton';
import ConditionalRenderer from './ConditionalRenderer';
import TextInput from './TextInput';
import AppContext from './AppContext';
import './App.css';



class App extends React.Component {

  render() {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((myJson) => console.log(myJson))
    .catch((myErr) => console.error(myErr));

    
    return (
      <div className="App">
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

          <CounterButton />
          <CounterButton />
          <CounterButton />

          <TextInput />

          <AppContext.Provider value="Marto">
            <ConditionalRenderer />
          </AppContext.Provider>

        </header>
      </div>
    )
  }
}

export default App;
