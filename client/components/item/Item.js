import React, {PropTypes} from 'react';
import {itemContainer, itemTitle, itemExcerpt} from './styles.css';

item.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired
};

export default function item({title, url, excerpt}) {
  const fullUrl = `https://en.wikipedia.org/wiki/${url}`;

  return (
    <div className={itemContainer}>
      <a href={fullUrl} className={itemTitle}>{title}</a>
      <div className={itemExcerpt}>{excerpt}</div>
    </div>
  );
}
