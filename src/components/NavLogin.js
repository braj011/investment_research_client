import React from 'react'
import { Route, withRouter, Link } from 'react-router-dom'
// import LoginForm from './LoginForm'
// import SignupForm from './SignupForm'
import { Button } from 'semantic-ui-react' 

import API from '../API'

import { connect } from 'react-redux';
import { signoutAction } from '../actions/authActions'
import { getNewsHeadlines } from '../actions/newsActions'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import MainContent from './MainContent';


// signout function
// no post request needed, so no API call 

// DO EQUIVALENT ---- except with Redux

class NavLogin extends React.Component {

  state = {
    titleClicked: false
  }

  signout = () => {
    this.props.signoutAction()
    localStorage.removeItem('token')
    this.props.history.push('/')
    API.getNewsHeadlines()
      .then(articles => this.props.getNewsHeadlines(articles))
  }

  showGeneralNews = () => {    
    console.log("is this showGeneralNews function onClick running?")

    this.props.history.push('/')
    API.getNewsHeadlines()
      .then(articles => this.props.getNewsHeadlines(articles))
  }

  // renderLoginButtons = () => {
  //   return 
  // }

  render() {
    // const { login, signup }   = this.props
    const { signout, showGeneralNews } = this
    return(

        <Navbar className="fixedTop"> 
          <Navbar.Header className="stockNote-title"> 
            {/* <Route exact path ='/' render={() => <MainContent />} />  */}
              <Link to="/" onClick={() => showGeneralNews()}  render={() => <MainContent />}>stockNote
            {/* // */}
            </Link> 
          </Navbar.Header>
          <Nav>
            {!this.props.loggedIn ? 
                <div >
                   <Link to="/signup">
                    <Button className="btn-signup">Register</Button>
                  </Link>
                  <Link to="/login">
                    <Button className="btn-login">Log in</Button>
                  </Link>
                </div>
                :
                <div>
                  <Button bsStyle="info" className="btn-logout" onClick={signout}>Log Out</Button>
                  <span className="welcome-user">Welcome, {this.props.firstName} </span>
                  
                </div>
    
            }
          </Nav>
          {/* <FilterArticles />  */}
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