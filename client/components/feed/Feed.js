import React, {PropTypes} from 'react';

export default function Feed({feed, onClick}) {
  return (
    <div onClick={onClick}>{feed}</div>
  );
}
