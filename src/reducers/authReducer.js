const defaultState = {
  email: "",
  firstName: "",
  loggedIn: false,
  userID: ""
  
}

export default function(state = defaultState, action)
{
  switch (action.type) {
    case "LOGIN":
      console.log("Auth Reduc: ", { firstName: action.payload.firstName , email: action.payload.email, loggedIn: true, userID: action.payload.userID })
      return { firstName: action.payload.firstName , email: action.payload.email, loggedIn: true, userID: action.payload.userID  }
    case "SIGNOUT":
      console.log('signed out')
      return defaultState
    default:
      return state
  }
}

