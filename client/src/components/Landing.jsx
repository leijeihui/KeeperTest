import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello World! x2</div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Landing);
