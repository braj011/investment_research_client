
export function getNewsHeadlines(dispatch, news) {
  console.log("adding news...")
  dispatch({
    type: 'GET_NEWS_HEADLINES',
    payload: news
  })
}

export function updateProfileNews(dispatch, news) {
  console.log("Profile news being added / updated")
  dispatch({
    type: 'UPDATE_PROFILE_NEWS',
    payload: news
  })
}

export function updateSingleStockNews(dispatch, news) {
  console.log("Profile news being added / updated")
  dispatch({
    type: 'UPDATE_SINGLE_STOCK_NEWS',
    payload: news
  })
}

// export function updateSingleStockNews(dispatch, news) {
//   console.log("Single Stock news being added / updated")
//   dispatch({
//     type: 'UPDATE_SINGLE_STOCK_NEWS',
//     payload: news
//   })
// }

//  ALTERNATIVE WAY OF WRITING + EXPORT
// const getNewsHeadlines = (dispatch, news) => {
//   dispatch({type: 'GET_NEWS_HEADLINES', payload: news})
// }

// export {
//   getNewsHeadlines
// }