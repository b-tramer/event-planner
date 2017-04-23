import React, { Component } from 'react';

import RegistrantRow from '../components/RegistrantRow'

class RegistrantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registrants: []
    }
  }

  componentDidMount() {
    fetch('/registrants.json')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({registrants: responseData.registrants})
    })
  }

  render() {
    let registrants = this.state.registrants.map(registrant => {
      return(
        <RegistrantRow
          key={registrant.email}
          email={registrant.email}
          firstName={registrant.firstName}
          lastName={registrant.lastName}
        />
      )
    })
    return(
      <div className="column row">
        <h3>Who is Coming to {this.props.eventName}?</h3>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {registrants}
          </tbody>
        </table>
        <button className="main-button" onClick={this.props.homeLink}>Home</button>
      </div>
    )
  }
}

export default RegistrantList;
