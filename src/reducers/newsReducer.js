const defaultState = {
  news: [],
  profileNews: [],
  singleStockNewss: []
}


export default function(state = defaultState, action)
{
  // console.log("News Reduc: ", state)
  switch (action.type) {
    case "GET_NEWS_HEADLINES":
      // console.log(action, state.news)
      return { news:  action.payload, profileNews: [] } // need to set the non-used store to empty
    case "UPDATE_PROFILE_NEWS":
      // debugger
      return { profileNews: action.payload.articles, news: [] }  // need to set the non-used store to empty
    case "UPDATE_SINGLE_STOCK_NEWS":
    //   debugger
      return { singleStockNews: action.payload, profileNews: [], news: [] }  
    default:
      return state  
  }
}


//  BOILERPLATE
// export default function(state = defaultState, action)
// {
//   switch (action.type) {
//     default:
//     return state
//   }
// }