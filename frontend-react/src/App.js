import React, {Component} from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'


import GameWindow from './components/GameWindow'
import UserForm from './components/UserForm'
import CardContainer from './components/CardContainer'
import HeaderBar from './components/HeaderBar'


class App extends Component {

  rerenderApp = () => {
    this.forceUpdate()
  }

  render() {
    return (
      <Router>
        <div className="App">

        <HeaderBar />

        <Route exact path="/" render={(props) => <UserForm {...props} rerenderApp={this.rerenderApp} />} />
        <Route path="/draw" component={GameWindow} />
        <Route path="/gallery" component={CardContainer} />

        </div>
      </Router>

    );
  }

}

export default App;
