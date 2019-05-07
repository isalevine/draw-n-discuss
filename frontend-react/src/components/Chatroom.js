import React, {Component} from 'react'
import {HEADERS, API_ROOT} from '../constants';
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import {ActionCable} from 'react-actioncable-provider';

class Chatroom extends Component {
  constructor(){
    super()
    this.state = {
      messages: []
    }
  }

  componentDidMount = () => {
    this.fetchMessages()
  }

  fetchMessages = () => {
    fetch(`${API_ROOT}/messages`)
      .then(resp => resp.json())
      .then(data => this.setState({
        messages: data
      }))
  }

  addNewMessage = (message) => {
    // this.setState({
    //   messages: [...this.state.messages, message]
    // })
    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        'text': message.text,
        'user_id': sessionStorage.getItem('id')
      })
    })
  }

  handleReceivedMessages = (message) => {
    // this.setState({
    //   messages: [...this.state.messages, message]
    // })
    this.fetchMessages()
  }

  render() {
    return (
      <div id="chatroom">
        <ActionCable
          channel={{channel: 'MessageChannel'}}
          onReceived={this.handleReceivedMessages}
        />
      <strong>New Message:
        <MessageForm
          addNewMessage={this.addNewMessage}
        />
      (Scroll down to see new messages!)</strong>
        <MessageList
          messages={this.state.messages}
          users={this.props.users}
        />

      </div>
    )
  }

}

export default Chatroom
