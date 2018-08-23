import React, {Component} from 'react';
import Buttons from './containers/Buttons';
import './App.css';

/**
 * The entry point of the apps.
 */
class App extends Component {
    render() {
        return (
            <div className="App">
                <Buttons/>
            </div>
        );
    }
}

export default App;
