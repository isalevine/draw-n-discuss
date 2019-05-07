import React, {Component} from 'react'
import Canvas from './Canvas'
import Chatroom from './Chatroom'
import ViewGalleryButton from './ViewGalleryButton'
import {API_ROOT, HEADERS} from '../constants/index.js'


class GameWindow extends Component {

  constructor() {
    super()
    this.state = {
      users: {}
    }
  }

  componentDidMount() {
    fetch(`${API_ROOT}/users`)
    .then(resp => resp.json())
    .then(data => {
      // console.log("fetch users data: ", data)
      let obj = {}
      data.forEach(user => {
        obj[user.id] = user.name
      })
      this.setState({users: obj})
    })
  }

  render() {
    return (
      <div id="game-window">
        <Canvas saveDrawing={this.saveDrawing}/>
        <Chatroom users={this.state.users}/>
        <ViewGalleryButton history={this.props.history}/>
      </div>
    )
  }

}

export default GameWindow
