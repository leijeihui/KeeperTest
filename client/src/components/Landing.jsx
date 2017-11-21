import React from 'react';
import Modal from './Modal.jsx';
import css from '../styles/Landing.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="landing-view">
          <div className="landing-content">Hello World!</div>
          <Modal />
        </div>
      </div>

    );
  }
}

export default Landing;