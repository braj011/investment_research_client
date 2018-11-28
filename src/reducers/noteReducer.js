const defaultState = {
  notes: []
}

export default function(state = defaultState, action)
{
  switch (action.type) {
    case 'LOAD_EXISTING_USERSTOCK_NOTES':
      return { notes: action.payload }

//  can you change the notes state based on if the selectedStock's user_stock_id matches the payload's user_stock_id - this would involve linking up to the stockStore's selectedStock - which is in another reducer.
//  perhaps I can make selectedStock a key/value in noteReducer also?

    case 'ADD_NEW_NOTE':
    console.log("Payload for when adding new note:",action.payload)
      return { notes: [...state.notes, action.payload]  }
    default:
      return state
  }
}