import React from 'react'

import logo from './logo.svg';
import CounterButton from './CounterButton';
import ConditionalRenderer from './ConditionalRenderer';
import TextInput from './TextInput';
import AppContext from './AppContext';

class Home extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />

                <br />

                <CounterButton />
                <CounterButton />
                <CounterButton />

                <TextInput />

                <AppContext.Provider value="Marto">
                    <ConditionalRenderer />
                </AppContext.Provider>
            </div>
        )
    }
}

export default Home