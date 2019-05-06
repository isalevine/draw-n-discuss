import React, {Component} from 'react'
import {HEADERS, API_ROOT} from '../constants';

class UserForm extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`${API_ROOT}/users`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        'name': this.state.name,
      })
    })
  }

  render() {
    return(
      <div id='form'>
				<h1 id='enter'>Enter your name:</h1>
        <form id="user_form" onSubmit={this.handleSubmit}>
          <input id="user_input" type="text" name="user" onChange={this.handleChange} required/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }

}

export default UserForm
