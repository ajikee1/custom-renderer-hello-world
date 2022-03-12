import React, { Component } from 'react';
import CustomRenderer from "./renderer";

class App extends Component {
    render() {
        return (<text>
        <text>{String('HELLO')}</text>
        <text>{String('TISTA')}</text>
        </text>);
    }
}

CustomRenderer.render(<App />);