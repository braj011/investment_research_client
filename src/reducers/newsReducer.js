const defaultState = {
  news: [],
  profileNews: ["test"]
}


export default function(state = defaultState, action)
{
  // console.log("News Reduc: ", state)
  switch (action.type) {
    case "GET_NEWS_HEADLINES":
      // console.log(action, state.news)
      return { news:  action.payload, profileNews: [] } // need to set the non-used store to empty
    case "UPDATE_PROFILE_NEWS":
      return { profileNews: action.payload, news: [] }  // need to set the non-used store to empty
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