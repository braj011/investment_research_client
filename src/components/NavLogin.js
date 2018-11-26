import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


import { connect } from 'react-redux';
import { signoutAction } from '../actions/authActions'
import { Navbar, Nav, NavItem } from 'react-bootstrap';


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

        <Navbar className="fixedTop"> 
          <Navbar.Header> 
            <Link to="/">INVESTMENTS</Link> 
          </Navbar.Header>
          <Nav>
            {!this.props.loggedIn ? 
                <NavItem>
                    <Link to="/login">
                    <button className="btn btn-info">Log in</button>
                  </Link>
                  <Link to="/signup">
                    <button className="btn btn-info">Sign up</button>
                  </Link>
                </NavItem>
                :
                <NavItem>
                  <span className="pr-3">Welcome, {this.props.firstName} </span>
                  <input type="button" className="btn btn-info" value="Log Out" 
                  onClick={signout} />
                </NavItem>
            }
          </Nav>
        </Navbar>
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