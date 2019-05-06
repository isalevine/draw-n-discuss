import React, {Component} from 'react'
import Canvas from './Canvas'
import Chatroom from './Chatroom'
import ViewGalleryButton from './ViewGalleryButton'


class GameWindow extends Component {

  render() {
    return (
      <div id="game-window">
        <Canvas saveDrawing={this.saveDrawing}/>
        <Chatroom />
        <ViewGalleryButton history={this.props.history}/>
      </div>
    )
  }

}

export default GameWindow
