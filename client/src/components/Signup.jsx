import React from 'react';
import axios from 'axios';
import { handleUserSignup } from '../utils/userHelpers.js';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup (e) {
    e.preventDefault();
    let outer = this;
    let signupInfo = {
      username: outer.refs.username.value,
      password: outer.refs.password.value,
      firstname: outer.refs.firstname.value,
      lastname: outer.refs.lastname.value,
      email: outer.refs.email.value
    };
    handleUserSignup(signupInfo);
  }


  render () {
    return (
      <div>
        <form>
          Username: <input type = "text" required ref = "username" /> <br />
          Password: <input type = "password" required ref = "password" /> <br />
          Firstname: <input type = "text" ref = "firstname" /><br />
          Lastname: <input type = "text" ref = "lastname" /><br />
          Email: <input type = "email" required ref = "email" /> <br />
          <button onClick={(e) => this.handleSignup(e)}>Signup</button>
        </form>
      </div>
    );
  }
}

export default Signup;