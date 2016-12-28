import React from 'react';
import {BrowserRouter, Match} from 'react-router';
import Main from '../components/main/Main';
import FeedContainer from '../components/feed/FeedContainer';

export default function Routes() {
  // <Miss component={NotFound}/>
  return (
    <BrowserRouter>
      <div>
        <Main>
          <Match exactly pattern="/" component={FeedContainer} />
        </Main>
      </div>
    </BrowserRouter>
  );
}
