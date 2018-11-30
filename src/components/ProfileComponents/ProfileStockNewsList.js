import React, { Component } from 'react'
import ProfileStockNewsItem from './ProfileStockNewsItem'
// import '../App.css';
import { Card } from 'semantic-ui-react'

import { connect } from 'react-redux';

class ProfileStockNewsList extends Component {

  render() {
    console.log("Profile news:", this.props.profileNews)
    console.log("props at profilenewslist", this.props)
    return(
        !this.props.selectedStock ? 
          <Card.Group itemsPerRow={3}> 
            {this.props.profileNews.map((article, index) => <ProfileStockNewsItem article={article} key={index} />)}
          </Card.Group> 
        :
          <Card.Group centred className ="single-stock-news-card-group" itemsPerRow={2}> 
            {this.props.profileNews.map((article, index) => <ProfileStockNewsItem article={article} key={index} />)}
          </Card.Group> 
      ) 
  }

}

const mapStateToProps = (state) => {
  return { 
    profileNews: state.newsStore.profileNews,
    selectedStock: state.stockStore.selectedStock
   }
}

export default connect(mapStateToProps)(ProfileStockNewsList)




