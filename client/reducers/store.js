import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import feed from './feed';
import bookmarks from './bookmarks';
import items from './items';
import wikiSaga from '../sagas/wikiSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({feed, bookmarks, items}),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(wikiSaga);

export default store;
