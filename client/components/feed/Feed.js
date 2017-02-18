import React, {PropTypes} from 'react';
import ItemContainer from '../item/ItemContainer';

Feed.propTypes = {
  feed: PropTypes.object.isRequired
};

export default function Feed({feed}) {
  return (
    <div>
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
