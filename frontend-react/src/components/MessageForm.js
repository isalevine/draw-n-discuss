import React from "react";

class MessageForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      text: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewMessage(this.state)
  }

  render() {
    return (
      <div>
        <form id="message_form" onSubmit={this.handleSubmit}>
          <input id="user_input" type="text" name="user" onChange={this.handleChange} required/>
          <input type="submit" value="Send"/>
        </form>
      </div>
    )
  }
}

export default MessageForm
