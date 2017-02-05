export default function feed(state = 'init feed', action) {
  switch (action.type) {
    case 'FETCH_FEATURED_SUCCESS':
      return action.tfa.normalizedtitle;
    default:
      return state;
  }
}
