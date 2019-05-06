import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Canvas from './components/Canvas'
import GameWindow from './components/GameWindow'
import UserForm from './components/UserForm'

class App extends Component {

  render() {
    return (
      <div className="App">
        <GameWindow />
        <UserForm />
      </div>
    );
  }

}

export default App;
