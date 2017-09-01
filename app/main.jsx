import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OtherComponent from './other-component'
import NavBar from './nav'

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <OtherComponent name="Props!" />
                    <div>Hello world react!</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));