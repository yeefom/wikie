// itemGroups = {group: [{title: ''}]}
function normalizeItems(itemGroups) {
  const normalized = {};

  Object.keys(itemGroups).forEach(group => {
    itemGroups[group].forEach(item => {
      normalized[item.title] = item;
    });
  });

  return normalized;
}

export default function items(state = {}, action) {
  switch (action.type) {
    case 'FETCH_ITEMS_SUCCESS':
      return {
        ...state,
        ...normalizeItems(action.items)
      };
    default:
      return state;
  }
}
