const defaultState = {
  userStocks: [],
  selectedStock: undefined
}

export default function(state = defaultState, action)
{
  switch (action.type) {
    case 'LOAD_EXISTING_USER_STOCKS':
      return { userStocks:  action.payload }
    case 'ADD_NEW_STOCK':
      return { userStocks: [...state.userStocks, action.payload.data[0]]  }
    case 'SELECT_USER_STOCK':
      console.log("selectedStock:", action.payload) 
      return { userStocks: [...state.userStocks], selectedStock: action.payload  }
    default:
      return state
  }
}

