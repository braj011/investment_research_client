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
      console.log("Adding a new userStock:", {
        id: action.payload.id,
        name: action.payload.name,
        stockNotes: action.payload.notes
      })
      return { userStocks: [...state.userStocks, action.payload]  }
    case 'SELECT_USER_STOCK':
      console.log("selectedStock:", action.payload) 
      return { userStocks: [...state.userStocks], selectedStock: action.payload  }
    default:
      return state
  }
}

