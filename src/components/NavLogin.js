import React from 'react'
import { withRouter, Link } from 'react-router-dom'
// import LoginForm from './LoginForm'
// import SignupForm from './SignupForm'

import API from '../API'
import FilterArticles from './FilterArticles' 
import { connect } from 'react-redux';
import { signoutAction } from '../actions/authActions'
import { getNewsHeadlines } from '../actions/newsActions'
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';


// signout function
// no post request needed, so no API call 

// DO EQUIVALENT ---- except with Redux

class NavLogin extends React.Component {

  signout = () => {
    this.props.signoutAction()
    localStorage.removeItem('token')
    this.props.history.push('/')
    API.getNewsHeadlines()
      .then(articles => this.props.getNewsHeadlines(articles))
  }

  // renderLoginButtons = () => {
  //   return 
  // }

  render() {
    // const { login, signup }   = this.props
    const { signout } = this
    return(

        <Navbar className="fixedTop"> 
          <Navbar.Header> 
            <Link to="/">INVESTMENTS</Link> 
          </Navbar.Header>
          <Nav>
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
                  <span className="pr-3">Welcome, {this.props.firstName} </span>
                  <Button bsStyle="info" className="btn btn-info" onClick={signout}>Log Out</Button>
                </div>
    
            }
          </Nav>
          <FilterArticles /> 
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
    signoutAction: () => signoutAction(dispatch),
    getNewsHeadlines: (news) => getNewsHeadlines(dispatch, news)
  } 
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavLogin))