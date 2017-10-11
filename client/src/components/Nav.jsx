import React from 'react';
import actions from '../../redux/actions.js';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import axios from 'axios';
import { handleUserLogout } from '../utils/userHelpers.js';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }


  handleLogout () {
    handleUserLogout();
    this.props.dispatch(actions.loggedIn(false));
  }

  render() {

    let whichNav = () => {
      let outer = this;
      console.log(this.props);
      if (!outer.props.loggedIn) {
        return (<div>
          <form>
            <input type="text" ref = "search" placeholder="Search User..." /> 
            <button>Search</button>
          </form>
          <a href="/#/signin"> Signin </a>
          <a href="/#/signup"> Signup </a>
        </div>);
      } else {
        return (<div>
          <form>
            <input type="text" ref = "search" placeholder="Search User..." /> 
            <button>Search</button>
          </form>
          <a href={`/#/${outer.props.currentUser}/about`}> About </a>
          <a href={`/#/${outer.props.currentUser}/portfolio`}> Portfolio </a>
          <a onClick={this.handleLogout}> Logout </a>
        </div>);
      }
    };

    return (
      <div>
        {whichNav()}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Nav);
