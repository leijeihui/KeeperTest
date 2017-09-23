import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import css from '../styles/Landing.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="logo">Blogger</div>
        <hr />
        <div className="landing-view">
          <div className="landing-content">Hello World!</div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Landing);
