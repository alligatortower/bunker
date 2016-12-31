import React, { Component } from 'react';
import './App.css';
import Systems from './containers/systems.js';
import Resources from './containers/resources.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Systems />
        <Resources />
      </div>
    );
  }
}

export default App;
