import React, { Component } from 'react'
import { connect } from 'react-redux'
import API from '../API'
import '../App.css'


import HeadlineNewsList from './HeadlineNewsList' 
import { getNewsHeadlines } from '../actions/newsActions'

class MainContent extends Component {

  componentDidMount() {
    API.getNewsHeadlines()
      .then(articles => this.props.getNewsHeadlines(articles))
  } 

  render() {

    return(
      <span className='main-content'> 
        <HeadlineNewsList  /> 
      </span> 
    ) 
  }

} 

const mapDispatchToProps = (dispatch) => {
  return {
    getNewsHeadlines: (news) => getNewsHeadlines(dispatch, news)
  } 
}

export default connect(null, mapDispatchToProps)(MainContent)

