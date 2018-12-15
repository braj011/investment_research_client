import React, { Component } from 'react';
// import { Route, withRouter, Link } from 'react-router-dom'
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import API from './API'
import LoginForm from './components/LoginForm'
import AppDescription from './components/AppDescription'
import { loginAction } from './actions/authActions'
import { loadUserStocks } from './actions/stockActions'
import { loadUserStockNotes } from './actions/noteActions'
import { updateProfileNews } from './actions/newsActions'

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
        .then(userStockInfo =>  {
          this.props.loadUserStocks(userStockInfo.data)
          // LOAD USERSTOCK NOTES
          // console.log("user object: ", user.data)
        }).then(this.getProfileNews)

      }
    } 
      // .then(articles => this.props.getNewsHeadlines(articles))

      // console.log("User:", user, "Logged in...")
      //  PLACEHOLDER until PROFILE PAGE COMPLETE

    getProfileNews = () => {
      let stocks = this.props.userStocks.map(stockItem => stockItem.name)
      // return fetch('https://stock-note-server.herokuapp.com/api/v1/news_apis/', {
      return fetch('http://localhost:3000/api/v1/news_apis/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'query': stocks.join(" OR "),
          'sort': 'relevancy'
        })
      }).then(resp => resp.json())
        .then(newsData => newsData.articles.filter(article => !!article.source.name)) 
        .then(news => this.props.updateProfileNews(news))
    }

    
  
  render() {
    const { login, getProfileNews } = this
    return (
      <div className="App">
        <NavLogin className="nav-bar" login={login} /> 
        <Route exact path ='/' render={() => <AppDescription/>} /> 
      {/* NOTE: routes potentially need to be from the App page + include withRouter if you're pushing history etc. / using props */}
        <Route exact path='/login' render={props => <LoginForm {...props} login={login} />} />
        <Route exact path='/signup' render={props => <SignupForm {...props} login={login} />} />
        { !this.props.loggedIn ?
          <Route exact path ='/' render={() => <MainContent />} /> 
          :
          <Route exact path ='/profile' render={() => <Profile  getProfileNews={getProfileNews} />} /> 
        } 

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { 
    loggedIn: state.authStore.loggedIn,
    userID: state.authStore.userID,
    userStocks: state.stockStore.userStocks,
    selectedStock: state.stockStore.selectedStock,
    profileNews: state.newsStore.profileNews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getNewsHeadlines: (news) => getNewsHeadlines(dispatch, news),
    // could have also action written explicitly here, rather than separated into a separate actions file 
    loginAction: (user) => loginAction(dispatch, user),
    loadUserStocks: (user) => loadUserStocks(dispatch, user),
    updateProfileNews: (news) => updateProfileNews(dispatch, news)
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
