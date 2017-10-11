import React from 'react';
import axios from 'axios';
import {handleUserSignin} from '../utils/userHelpers.js';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn (e) {
    e.preventDefault();
    let outer = this;
    let signInInfo = {
      username: outer.refs.username.value,
      password: outer.refs.password.value
    };
    handleUserSignin(signInInfo, (username) => {
      outer.props.dispatch(actions.currentUser(username));
      outer.props.dispatch(actions.loggedIn(true));
    });
  }

  render() {
    return (
      <div>
        <form>
          Username: <input type = "text" required ref = "username" /> <br />
          Password: <input type = "password" required ref = "password" /> <br />
          <button type = "submit" onClick ={ e => this.handleSignIn(e) }> Sign in </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Signin);

