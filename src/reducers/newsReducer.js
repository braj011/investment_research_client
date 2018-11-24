const defaultState = {
  news: []
}


export default function(state = defaultState, action)
{
  // console.log("News Reduc: ", state)
  switch (action.type) {
    case "GET_NEWS_HEADLINES":
      // console.log(action, state.news)
      return { news:  action.payload }
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