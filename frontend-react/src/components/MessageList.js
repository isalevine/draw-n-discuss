import React, {Component} from 'react'
import Message from './Message'

class MessageList extends Component {

  createMessages = () => {
    return this.props.messages.map(message => {
      return (
        <Message
          message={message}
          key={Math.random()}
          text={message.text}
          name={this.props.users[message.user_id]}
          tempName={sessionStorage.getItem('name')}
        />
      )
    })
  }

  render() {
    console.log("this.props.users: ", this.props.users)
    return (
      <div className="messageList">
        <ul>
          {this.createMessages()}
        </ul>
      </div>
    )
  }

}

export default MessageList

// userId={message.user_id}
// name={sessionStorage.getItem('name')}
