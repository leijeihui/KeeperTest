import React from 'react';
import actions from '../../redux/actions.js';
import {connect} from 'react-redux';
import { Link } from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let whichNav = () => {
      if (this.props.about.length) {
        return <div></div>;
      } else {
        return <div></div>;
      }
    };

    return (
      <div>
        
      </div>
    );
  }
}