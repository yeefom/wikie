// itemGroups = {group: [{title: ''}]}
function parseGroups(itemGroups) {
  return Object.keys(itemGroups).reduce((groups, group) => {
    groups[group] = itemGroups[group].map(item => item.title);
    return groups;
  }, {});
}

export default function feed(state = {}, action) {
  switch (action.type) {
    case 'FETCH_ITEMS_SUCCESS':
      return {
        ...state,
        ...parseGroups(action.items)
      };
    default:
      return state;
  }
}
