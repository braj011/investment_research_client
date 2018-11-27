import React, { Component } from 'react'
import HeadlineNews from './HeadlineNews'
import '../App.css';
import { Card } from 'semantic-ui-react'

import { connect } from 'react-redux';

class HeadlineNewsList extends Component {

  render() {
    console.log("Props news from HeadlineNewsList", this.props.news)
    return(
      <Card.Group itemsPerRow={3} divided>
        {this.props.news.map((article, index) => 
            <HeadlineNews article={article} key={index} />)
        } 
      </Card.Group> 
    ) 
  }

}

const mapStateToProps = (state) => {
  return { news: state.newsStore.news }
}

export default connect(mapStateToProps)(HeadlineNewsList)