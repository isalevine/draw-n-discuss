import React, {Component} from 'react'


class ViewGameButton extends Component {

  handleClick = () => {
    this.props.history.push('/draw')
  }

  render() {
    return (
      <button id="view-game-button" onClick={this.handleClick.bind(this)}>
        Click here to go back to drawing!
      </button>
    )
  }

}

export default ViewGameButton
