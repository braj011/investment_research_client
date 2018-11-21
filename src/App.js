import React, { Component } from 'react';
// import { Route, withRouter, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    news: []
  }

componentDidMount() {
  this.getNewsHeadlines()
}
 
  // move to API class 
  getNewsHeadlines = () => {
    if (this.state.news.length > 0) {
      this.setState({ news: []})
    }
    return fetch('http://localhost:3000/api/v1/news_apis/')
      .then(resp => resp.json())

      .then(newsData => {
        const news = newsData.articles.map(article => {
          if (!article.author) {
            return {...article, author: "Unknown"}
          } else {
            return article
          }
        })
        this.setState({news: news})
      }) 
  } 


  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo " alt="logo" />
        <ul> 
          {this.state.news.map(article => <li>{article.author} </li>)}
        </ul> 
      </div>
    )
  }
}

export default App;
