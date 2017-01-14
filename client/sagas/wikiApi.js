import {takeLatest, put, call} from 'redux-saga/effects';

function getTimeStamp() {
  const timeStamp = new Date();
  const year = timeStamp.getFullYear();
  let [month, day] = [timeStamp.getMonth() + 1, timeStamp.getDate()];
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  return {
    year,
    month,
    day
  };
}


function* fetchFeatured() {
  const {year, month, day} = getTimeStamp();

  // TODO get
  // yield call(`https://en.wikipedia.org/api/rest_v1/feed/featured/${year}/${month}/${day}`);

  console.log('items');
  yield put({
    type: 'FETCH_FEATURED_SUCCESS',
    items: 'items'
  });

  // todo handle error
}

export default function* wikiApi() {
  yield takeLatest('FETCH_FEATURED', fetchFeatured);
}
