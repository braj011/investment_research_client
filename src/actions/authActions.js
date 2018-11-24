
export function loginAction(dispatch, user) {
  console.log("adding news...")
  dispatch({
    type: 'LOGIN',
    payload: user
  })
}


export function signoutAction(dispatch) {
  dispatch({
    type: 'SIGNOUT'
  })
}