import React from 'react';
import Modal from './Modal.jsx';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
          <Modal />
      </div>

    );
  }
}

export default Landing;