import React, {Component} from 'react'
import Message from './Message'

class MessageList extends Component {

  render() {
    debugger
    return (
      <div className="messageList">
        <ul>
          {this.props.messages.map(message =>
            <Message
              message={message}
              key={message.user_id}
              text={message.text}
              name={sessionStorage.getItem('name')}
            />
          )}
        </ul>
      </div>
    )
  }

}

export default MessageList
