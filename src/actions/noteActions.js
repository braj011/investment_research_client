


export function loadUserStockNotes(dispatch, notes) {
  console.log("once logging in, load notes relating to the userStock")
  dispatch({
    type: 'LOAD_EXISTING_USERSTOCK_NOTES',
    payload: notes
  })
}

export function addNewNote(dispatch, newNote) {
  console.log("adding new note to the user_stock")
  dispatch({
    type: 'ADD_NEW_NOTE',
    payload: newNote
  })
}