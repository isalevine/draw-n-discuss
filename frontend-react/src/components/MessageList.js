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
          fetchUsers={this.props.fetchUsers}
        />
      )
    })
  }

  render() {
    if(this.props.messages.length > 0) {
      return (
        <div className="messageList">
          <ul>
            {this.createMessages()}
          </ul>
        </div>
      )} else {
        return <div></div>
      }
   }

}

export default MessageList
