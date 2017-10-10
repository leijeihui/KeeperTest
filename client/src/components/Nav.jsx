import React from 'react';
import actions from '../../redux/actions.js';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import axios from 'axios';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.checkIfLoggedIn = this.checkIfLoggedIn.bind(this);
    this.state = {};
    
  }

  componentDidMount () {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn () {
    let outer = this;
    axios.get('/api/isLoggedIn').then(loggedIn => {
      console.log(loggedIn.data);
      outer.setState({
        loggedIn: loggedIn.data
      });
    });
  }

  render() {

    let whichNav = () => {
      let outer = this;
      console.log(this.props);
      if (!this.state.loggedIn) {
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
