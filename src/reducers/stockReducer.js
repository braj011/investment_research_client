const defaultState = {
  userStocks: ["test"]
}

export default function(state = defaultState, action)
{
  switch (action.type) {
    case 'LOAD_EXISTING_USER_STOCKS':
      return { userStocks:  action.payload.userStocks }
    case 'ADD_NEW_STOCK':
      return { userStocks: [...state.userStocks, action.payload]  }
    default:
      return state
  }
}

