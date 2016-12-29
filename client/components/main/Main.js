import React, {PropTypes} from 'react';
import NavContainer from '../nav/NavContainer';

export default function Main(props) {
  return (
    <div>
      <NavContainer/>
      {props.children}
    </div>
  );
}
