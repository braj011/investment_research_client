
export function getNewsHeadlines(dispatch, news) {
  console.log("adding news...")
  dispatch({
    type: 'GET_NEWS_HEADLINES',
    payload: news
  })
}

//  ALTERNATIVE WAY OF WRITING + EXPORT
// const getNewsHeadlines = (dispatch, news) => {
//   dispatch({type: 'GET_NEWS_HEADLINES', payload: news})
// }

// export {
//   getNewsHeadlines
// }