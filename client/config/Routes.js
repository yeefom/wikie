import React from 'react';
import {BrowserRouter, Match, Redirect} from 'react-router';
import Main from '../components/main/Main';
import FeedContainer from '../components/feed/FeedContainer';

export default function Routes() {
  // <Miss component={NotFound}/>
  return (
    <BrowserRouter>
      <div>
        <Main>
          <Match exactly pattern="/" render={() => <Redirect to="/feed"/>}/>
          <Match exactly pattern="/feed" component={FeedContainer}/>
        </Main>
      </div>
    </BrowserRouter>
  );
}
