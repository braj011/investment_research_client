
export function loadUserStocks(dispatch, user) {
  console.log("once logging in, displaying User's existing stocks")
  dispatch({
    type: 'LOAD_EXISTING_USER_STOCKS',
    payload: user
  })
}

export function addNewStock(dispatch, newStock) {
  console.log("adding new stock to user's stocklist")
  dispatch({
    type: 'ADD_NEW_STOCK',
    payload: newStock
  })
}