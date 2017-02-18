import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Item from './Item';

class ItemContainer extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired
  }

  render() {
    return (
      <Item {...this.props}/>
    );
  }
}

function mapStateToProps({items}, props) {
  const itemData = items[props.itemKey];

  return {
    title: itemData.normalizedtitle,
    url: itemData.title,
    excerpt: itemData.extract,
    thumbnail: itemData.thumbnail.source
  };
}

export default connect(mapStateToProps)(ItemContainer);
