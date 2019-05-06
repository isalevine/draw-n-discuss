import React, {Component} from 'react';
import {API_ROOT, HEADERS} from '../constants';

class NewMessageForm extends Component {

  state = {
    text: '',
    conversation_id: this.props.conversation_id
  }

  componentWillReceiveProps = nextProps => {
    this.setState({conversation_id: nextProps.conversation_id})
  }

  handleChange = ev => {
    this.setState({text: ev.target.value})
  }

  handleSubmit = ev => {
    ev.preventDefault();

    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    })
    this.setState({text: ''})
  }

  render = () => {
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default NewMessageForm;
