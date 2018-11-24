import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


import { connect } from 'react-redux';
import { signoutAction } from '../actions/authActions'


// signout function
// no post request needed, so no API call 

// DO EQUIVALENT ---- except with Redux

class NavLogin extends React.Component {

  signout = () => {
    this.props.signoutAction()
    localStorage.removeItem('token')
    this.props.history.push('/')
  }

  // renderLoginButtons = () => {
  //   return 
  // }

  render() {
    const { login, signup }   = this.props
    const { signout } = this
    return(
      <div>
        {!this.props.loggedIn ? 
          <div>
              <Link to="/login">
               <button className="btn btn-info">Log in</button>
             </Link>
             <Link to="/signup">
               <button className="btn btn-info">Sign up</button>
             </Link>
          </div>
          :
          <div>
            <div className="pr-3">Welcome, {this.props.firstName} </div>
            <input type="button" className="btn btn-info" value="Log Out" 
            onClick={signout} />
          </div>
        }
      </div>
    )
  }

} 

const mapStateToProps = (state) => {
  return { 
    firstName: state.authStore.firstName,
    loggedIn: state.authStore.loggedIn  
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signoutAction: () => signoutAction(dispatch)
  } 
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavLogin))