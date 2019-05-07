import React, {Component} from 'react'
import {HEADERS, API_ROOT} from '../constants';
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chatroom extends Component {
  constructor(){
    super()
    this.state = {
      messages: []
    }
  }

  componentDidMount = () => {
    fetch(`${API_ROOT}/messages`)
      .then(resp => resp.json())
      .then(data => this.setState({
        messages: data
      }))
  }

  addNewMessage = (message) => {
    this.setState({
      messages: [...this.state.messages, message ]
    })
    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        'text': message.text,
        'user_id': sessionStorage.getItem('id')
      })
    })
  }

  render() {
    return (
      <div id="chatroom">
        <MessageList messages={this.state.messages} users={this.props.users}/>
        <MessageForm addNewMessage={this.addNewMessage} />
      </div>
    )
  }

}

export default Chatroom
