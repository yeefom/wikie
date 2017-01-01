import {createStore, combineReducers} from 'redux';
import feed from './feed';
import bookmarks from './bookmarks';

const store = createStore(combineReducers({
  feed,
  bookmarks
}));

export default store;
