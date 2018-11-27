const defaultState = {
  userStocks: ["test"],
  selectedStock: undefined
}

export default function(state = defaultState, action)
{
  switch (action.type) {
    case 'LOAD_EXISTING_USER_STOCKS':
      return { userStocks:  action.payload.userStocks }
    case 'ADD_NEW_STOCK':
      return { userStocks: [...state.userStocks, action.payload]  }
    case 'SELECT_STOCK':
      return { userStocks: [...state.userStocks], selectedStock: action.payload  }
    default:
      return state
  }
}

