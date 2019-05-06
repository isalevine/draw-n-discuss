import React, {Component} from 'react'
import Canvas from './Canvas'
import Chatroom from './Chatroom'


class GameWindow extends Component {

  render() {
    return (
      <div id="game-window">
        <Canvas />
        <Chatroom />
      </div>
    )
  }

}

export default GameWindow
