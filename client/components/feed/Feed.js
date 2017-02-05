import React, {PropTypes} from 'react';
import ItemContainer from '../item/ItemContainer';

Feed.propTypes = {
  feed: PropTypes.object.isRequired,
  fetchFeatured: PropTypes.func.isRequired
};

export default function Feed({feed, fetchFeatured}) {
  return (
    <div>
      <div onClick={fetchFeatured}>fetch featured</div>
      {
        feed.tfa && feed.tfa.length > 0
          ? feed.tfa.map((itemKey, index) =>
              <ItemContainer
                key={index}
                itemKey={itemKey}
              />
            )
          : ''
      }
    </div>
  );
}
