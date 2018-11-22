import React, { Component } from 'react';
// import { Route, withRouter, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import HeadlineNewsList from './components/HeadlineNewsList' 
import API from './API'
import { getNewsHeadlines } from './actions/newsActions'


class App extends Component {

 
componentDidMount() {
  API.getNewsHeadlines()
    .then(articles => this.props.getNewsHeadlines(articles))
}

  // move to API class 
  // getNewsHeadlines = () => {
  //   return fetch('http://localhost:3000/api/v1/news_apis/')
  //     .then(resp => resp.json())
  //     .then(newsData => {
  //       const news = newsData.articles.map(article => {
  //         if (!article.author) {
  //           return {...article, author: "Unknown"}
  //         } else {
  //           return article
  //         }
  //       })
  //       this.setState({news: news})
  //     }) 
  // } 


  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo " alt="logo" />
        <HeadlineNewsList /> 
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewsHeadlines: (news) => getNewsHeadlines(dispatch, news)
    // action written explicitly here, rather than separated into a separate actions file 
  }
}


export default connect(null, mapDispatchToProps)(App)
