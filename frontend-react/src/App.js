import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'


import {API_ROOT, HEADERS} from './constants/index.js'
import Canvas from './components/Canvas'
import GameWindow from './components/GameWindow'
import UserForm from './components/UserForm'
import CardContainer from './components/CardContainer'
import HeaderBar from './components/HeaderBar'
import LoginWarning from './components/LoginWarning'
// import WelcomeMessage from './components/WelcomeMessage'


class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
  }

  userLogin = () => {
    this.setState({loggedIn: true})
  }

  displayHeaderBar = () => {
    if (this.state.loggedIn) {
      return <HeaderBar />
    } else {
      return <LoginWarning />
    }
  }

  render() {
    return (
      <Router>
        <div className="App">

        {this.displayHeaderBar()}

        <Route exact path="/" render={(props) => <UserForm {...props} userLogin={this.userLogin} />} />
        <Route path="/draw" component={GameWindow} />
        <Route path="/gallery" component={CardContainer} />

        </div>
      </Router>

    );
  }

}

export default App;
