export default function feed(state = 'init feed', action) {
  switch (action.type) {
    case 'FETCH_FEATURED_SUCCESS':
      console.log('fetch success');
      return action.items;
    default:
      return state;
  }
}
