import React, { Component } from 'react';
// import { Route, withRouter, Link } from 'react-router-dom'
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import API from './API'
import LoginForm from './components/LoginForm'
import { loginAction } from './actions/authActions'
import NavLogin from './components/NavLogin';
import MainContent from './components/MainContent';
import SignupForm from './components/SignupForm';
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
      // console.log("User:", user, "Logged in...")
      //  PLACEHOLDER until PROFILE PAGE COMPLETE
      this.props.history.push('/')
    }
  } 


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
        
        <Route exact path ='/' render={() => <MainContent />} /> 
      </div>
    )
  }
}



{/* <div className="app">
          <div className="scroller">
            {items.map(({ name, image }) => {
              return (
                  <div className="item">
                    <img src={image} />
                    {name}
                  </div>
              );
            })}
          </div>
      </div> */}


const mapDispatchToProps = (dispatch) => {
  return {
    // getNewsHeadlines: (news) => getNewsHeadlines(dispatch, news),
    // could have also action written explicitly here, rather than separated into a separate actions file 
    loginAction: (user) => loginAction(dispatch, user)
  }
}


export default withRouter(connect(null, mapDispatchToProps)(App))
