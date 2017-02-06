import {takeLatest, put, call} from 'redux-saga/effects';
import {callFeaturedService} from '../api/wiki';
import {FETCH_FEATURED, FETCH_ITEMS_SUCCESS} from '../config/constants';


function* fetchFeatured() {
  const res = yield call(callFeaturedService);

  yield put({
    type: FETCH_ITEMS_SUCCESS,
    items: {tfa: [res.data.tfa]}
  });

  // todo handle error
}

export default function* wikiApi() {
  yield takeLatest(FETCH_FEATURED, fetchFeatured);
}
