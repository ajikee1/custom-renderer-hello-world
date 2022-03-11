/*
    The idea is to render the hello world in the browser DOM using a custom renderer implementation instead of the react-dom one.
 */

import React from 'react';
/* import ReactDOM from 'react-dom'; default renderer. Replaced with custom renderer. */
import CustomRenderer from './renderer';


const Text = props => {
  return <p className={props.className}>{props.content}</p>
}

const App = () => {
  return (
      <div>
        <Text className="hello-class" content="Hello" />
        <span style={{ color: 'blue' }}>World</span>
      </div>
  )
}

// ReactDOM.render(<React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root'));
CustomRenderer.render(<App />, document.getElementById('root'));

