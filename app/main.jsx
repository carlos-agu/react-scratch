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
                    <div>
                        <h1 className="display-4">Hello world react!</h1>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));