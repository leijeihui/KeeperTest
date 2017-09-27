import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import axios from 'axios';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.handleAboutInfo = this.handleAboutInfo.bind(this);
  }
  componentDidMount() {
    this.handleAboutInfo();
  }

  handleAboutInfo () {
    axios.get('/api/:username/about').then(userObj => {
      this.props.dispatch(actions.getAbout(userObj.data[0]));
      console.log(this.props);
    });
  }

  render() {
    return (
      <div>
        This is the about page
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(About);