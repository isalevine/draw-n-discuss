import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Canvas from './components/Canvas'
import GameWindow from './components/GameWindow'

class App extends Component {

  render() {
    return (
      <div className="App">
        <GameWindow />
      </div>
    );
  }

}

export default App;
