const defaultState = {
  stockData: []
}

export default function(state = defaultState, action)
{
  switch (action.type) {
    case 'UPDATE_STOCK_DATA':
    console.log("stock data being returned:", action.payload, "stock - close price", action.payload.close)
    // debugger
      return { stockData: action.payload.map(day => day.close) } 
        // pick which bits of stock data I need here
        // perhaps I only need close price
     
    default:
      return state
        
      
  }

} 
