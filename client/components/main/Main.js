import React, {PropTypes} from 'react';
import NavContainer from '../nav/NavContainer';
import globalStyles from '../../styles/globalStyles.css';
import {bodyContainer} from './styles.css';

export default function Main(props) {
  return (
    <div className={bodyContainer}>
      <h1>Wikie</h1>
      <NavContainer/>
      {props.children}
    </div>
  );
}
