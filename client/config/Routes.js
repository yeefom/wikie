import React from 'react';
import {BrowserRouter, Match} from 'react-router';
import Main from '../components/main/Main';

export default function Routes() {
  // <Miss component={NotFound}/>
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Main}/>
      </div>
    </BrowserRouter>
  );
}
