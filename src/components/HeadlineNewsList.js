import React, { Component } from 'react'
import HeadlineNews from './HeadlineNews'


import { connect } from 'react-redux';

class HeadlineNewsList extends Component {

  render() {
    console.log(this.props.news)

    return(
      <div> 
        {this.props.news.map((article, index) => <HeadlineNews article={article} key={index} />)}
      </div> 
    ) 
  }

}

const mapStateToProps = (state) => {
  return { news: state.newsStore.news }
}

export default connect(mapStateToProps)(HeadlineNewsList)