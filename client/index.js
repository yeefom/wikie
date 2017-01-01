import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/Routes';
import store from './reducers/store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('app')
);
