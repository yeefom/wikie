import React, {PropTypes} from 'react';

item.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired
};

export default function item({title, url, excerpt}) {
  const fullUrl = `https://en.wikipedia.org/wiki/${url}`;

  return (
    <div>
      <div>{title}</div>
      <a href={fullUrl}>{fullUrl}</a>
      <div>{excerpt}</div>
    </div>
  );
}
