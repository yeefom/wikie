import React, {PropTypes} from 'react';
import ItemContainer from '../item/ItemContainer';

Feed.propTypes = {
  feed: PropTypes.object.isRequired
};

export default function Feed({feed}) {
  return (
    <div>
      {
        feed.mostread && feed.mostread.length > 0
          ? feed.mostread.map((itemKey, index) =>
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
