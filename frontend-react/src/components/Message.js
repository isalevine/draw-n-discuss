import React, {Component} from 'react'


class Message extends Component {

  handleClickEdit = () => {

  }

  handleClickDelete = () => {

  }

  render() {
    return (
      <div className="message">



        <button className="edit-button" onClick={this.handleClickEdit}>Edit</button>
        <button className="delete-button" onClick={this.handleClickDelete}>Delete</button>

      </div>
    )
  }

}

export default Message
