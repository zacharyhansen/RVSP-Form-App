import React from 'react';
import $ from 'jquery';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      numOfGuests: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  submitForm() {
    axios.post('/rsvps', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.emailAddress,
      numOfGuests: this.state.numOfGuests,
    })
      .then((res) => {
        console.log('response: ', res)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit(event) {
    this.submitForm();
    console.log('Submitted');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>RVSP Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
          <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} required />
          </label>
          <label>
            Last Name:
          <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} required />
          </label>
          <label>
            Email Address:
          <input name="emailAddress" type="email" placeholder="billly@bobby.com" value={this.state.emailAddress} onChange={this.handleChange} required />
          </label>
          <label>
            Number of Guests:
          <input name="numOfGuests" type="text" value={this.state.numOfGuests} onChange={this.handleChange} required />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App;
