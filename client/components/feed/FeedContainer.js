import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Feed from './Feed';

class FeedContainer extends Component {
  render() {
    return (
      <Feed
        feed = {this.props.feed}
      />
    );
  }
}

function mapStateToProps({feed}) {
  return {
    feed
  };
}

export default connect(mapStateToProps)(FeedContainer);
