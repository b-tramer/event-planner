import React, { Component } from 'react';

import TextField from '../components/TextField';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleTextFieldChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let payload = JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email
      })
      fetch('/registrations.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload
      })
      this.props.flashMessage({'Success': 'Thank you for registering.'})
      this.props.homeLink()
    }
  }

  validateForm() {
    if (
      this.state.firstName === '' ||
      this.state.lastName === '' ||
      this.state.email === ''
    ) {
      this.props.flashMessage({'Error': 'Please fill out the form completely.'})
      return false
    } else {
      return true
    }
  }

  render() {
    return(
      <div className="column row">
        <h3>Registration for {this.props.eventName}</h3>
        <form onSubmit={this.handleFormSubmit}>
          <TextField
            content={this.state.firstName}
            id='firstName'
            handlerFunction={this.handleTextFieldChange}
            label='First Name'
          />
          <TextField
            content={this.state.lastName}
            id='lastName'
            handlerFunction={this.handleTextFieldChange}
            label='Last Name'
          />
          <TextField
            content={this.state.email}
            id='email'
            handlerFunction={this.handleTextFieldChange}
            label='E-mail'
          />
          <fieldset>
            <input className="main-button" type="submit" value="Submit" />
          </fieldset>
        </form>
        <button className="main-button" onClick={this.props.homeLink}>Home</button>
      </div>
    )
  }

}

export default RegistrationForm;
