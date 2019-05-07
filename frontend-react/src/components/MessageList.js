import React, {Component} from 'react'
import Message from './Message'

class MessageList extends Component {

  render() {
    if(this.props.messages.length > 0) {
    return (
      <div className="messageList">
        <ul>
          {this.props.messages.map(message =>
            <Message
              message={message}
              key={message.id}
              text={message.text}
              name={sessionStorage.getItem('name')}
            />
          )}
        </ul>
      </div>
    )} else {
      return <div></div>
    }
  }

}

export default MessageList
