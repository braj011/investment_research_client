import React, { Component } from 'react';
// import { Route, withRouter, Link } from 'react-router-dom'
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import API from './API'
import LoginForm from './components/LoginForm'
import { loginAction } from './actions/authActions'
import { loadUserStocks } from './actions/stockActions'

import NavLogin from './components/NavLogin';
import MainContent from './components/MainContent';
import SignupForm from './components/SignupForm';
import Profile from './components/Profile'
// import { Navbar } from 'react-bootstrap';


class App extends Component {

 
  componentDidMount() {
  
    if (localStorage.getItem('token')) {
      API.validate()
        .then(user => this.login(user))
        .catch(error => {
          this.props.history.push('/')
        })
    }   
  }

  login = (user) => {
    console.log(user)
    if (user.error) {
      alert(user.error) 
    } else {
      localStorage.setItem('token', user.token)
      this.props.loginAction(user)
      this.props.history.push('/profile')
      API.getProfile(this.props.userID)
        .then(user =>  {
          this.props.loadUserStocks(user.data)
          console.log("user object: ", user.data)
        })

      }
    } 
      // .then(articles => this.props.getNewsHeadlines(articles))

      // console.log("User:", user, "Logged in...")
      //  PLACEHOLDER until PROFILE PAGE COMPLETE
      
  
   


  signup = (user) => {
    this.login(user)
  }

  render() {
    const { login, signup } = this
    return (
      <div className="App">
        <NavLogin className="nav-bar" login={login} signup={signup} /> 
      {/* NOTE: routes potentially need to be from the App page + include withRouter if you're pushing history etc. / using props */}
        <Route exact path='/login' render={props => <LoginForm {...props} login={login} />} />
        <Route exact path='/signup' render={props => <SignupForm {...props} signup={signup}/>} />
        { !this.props.loggedIn ?
          <Route exact path ='/' render={() => <MainContent />} /> 
          :
          <Route exact path ='/profile' render={() => <Profile />} /> 
        } 

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { 
    loggedIn: state.authStore.loggedIn,
    userID: state.authStore.userID,
    userStocks: state.stockStore.userStocks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getNewsHeadlines: (news) => getNewsHeadlines(dispatch, news),
    // could have also action written explicitly here, rather than separated into a separate actions file 
    loginAction: (user) => loginAction(dispatch, user),
    loadUserStocks: (user) => loadUserStocks(dispatch, user)
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
