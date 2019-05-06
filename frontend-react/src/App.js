import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import ConversationsList from './components/ConversationsList'
import Canvas from './components/Canvas'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Canvas />
      </div>
    );
  }

}

export default App;
