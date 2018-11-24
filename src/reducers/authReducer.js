const defaultState = {
  email: "",
  firstName: "",
  loggedIn: false
}

export default function(state = defaultState, action)
{
  switch (action.type) {
    case "LOGIN":
      console.log("Auth Reduc: ", { firstName: action.payload.firstName , email: action.payload.email, loggedIn: true })
      return { firstName: action.payload.firstName , email: action.payload.email, loggedIn: true }
    case "SIGNOUT":
      console.log('signed out')
      return defaultState
    default:
      return state
  }
}

