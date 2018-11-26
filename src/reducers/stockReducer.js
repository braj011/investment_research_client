const defaultState = {
  userStocks: []
}

export default function(state = defaultState, action)
{
  switch (action.type) {
    case 'LOAD_EXISTING_USER_STOCKS':
      return { userStocks:  action.payload.userStocks }
    default:
      return state
  }
}