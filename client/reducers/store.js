import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import feed from './feed';
import bookmarks from './bookmarks';
import wikiSaga from '../sagas/wikiSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({feed, bookmarks}),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(wikiSaga);

export default store;
