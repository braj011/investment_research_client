
export function loadUserStocks(dispatch, user) {
  console.log("once logging in, displaying User's existing stocks")
  dispatch({
    type: 'LOAD_EXISTING_USER_STOCKS',
    payload: user
  })
}