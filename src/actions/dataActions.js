
export function updateStockData(dispatch, stockData) {
  console.log("about to update the stockData state with selectedStock data")
  dispatch({
    type: 'UPDATE_STOCK_DATA',
    payload: stockData
  })
}

