import React, { Component } from 'react'
import ProfileStockNewsItem from './ProfileStockNewsItem'
// import '../App.css';

import { connect } from 'react-redux';

class ProfileStockNewsList extends Component {

  render() {
    console.log("Profile news:", this.props.profileNews)

    return(
      <div> 
        {this.props.profileNews.map((article, index) => <ProfileStockNewsItem article={article} key={index} />)}
      </div> 
    ) 
  }

}

const mapStateToProps = (state) => {
  return { profileNews: state.newsStore.profileNews }
}

export default connect(mapStateToProps)(ProfileStockNewsList)