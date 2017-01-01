import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {navContainer} from './style.css';

export default function Nav() {
  return (
    <div>
      <ul className={navContainer}>
        <li><Link to="/feed" activeClassName="active">Feed</Link></li>
        <li><Link to="/bookmarks" activeClassName="active">Bookmarks</Link></li>
      </ul>
    </div>
  );
}
