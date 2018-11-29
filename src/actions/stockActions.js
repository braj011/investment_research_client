
export function loadUserStocks(dispatch, userStockInfo) {
  console.log("once logging in, displaying User's existing stocks and data:", userStockInfo)
  // this displays userInfo and userStocks, each item in userStocks is an object that has an array called stockNotes
  dispatch({
    type: 'LOAD_EXISTING_USER_STOCKS',
    payload: userStockInfo
  })
}

export function addNewStock(dispatch, newStock) {
  console.log("adding new stock to user's stocklist")
  dispatch({
    type: 'ADD_NEW_STOCK',
    payload: newStock
})
}


export function selectStock(dispatch, selectedStock) {
  console.log("selecting a stock")
  dispatch({
    type: 'SELECT_USER_STOCK',
    payload: selectedStock
  })
}