import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {API_ROOT, HEADERS} from './constants/index.js'
import Canvas from './components/Canvas'
import GameWindow from './components/GameWindow'
import UserForm from './components/UserForm'
import CardContainer from './components/CardContainer'


class App extends Component {

  render() {
    return (
      <div className="App">
        <GameWindow />
        <UserForm />
        <CardContainer />

      </div>
    );
  }

}

export default App;
