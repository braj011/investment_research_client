const defaultState = {
  stockData: ["dummy_data"]
}

export default function(state = defaultState, action)
{
  switch (action.type) {
    case 'UPDATE_STOCK_DATA':
      return { stockData: 
        action.payload.close 
        // pick which bits of stock data I need here
        // perhaps I only need close price
      } 
    default:
      return state
        
      
  }

} 
