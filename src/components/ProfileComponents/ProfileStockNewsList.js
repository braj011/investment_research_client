import React, { Component } from 'react'
import ProfileStockNewsItem from './ProfileStockNewsItem'
// import '../App.css';
import { Card } from 'semantic-ui-react'

import { connect } from 'react-redux';

class ProfileStockNewsList extends Component {

  render() {
    console.log("Profile news:", this.props.profileNews)

    return(
      <Card.Group itemsPerRow={3}> 
        {this.props.profileNews.map((article, index) => <ProfileStockNewsItem article={article} key={index} />)}
      </Card.Group> 
    ) 
  }

}

const mapStateToProps = (state) => {
  return { profileNews: state.newsStore.profileNews }
}

export default connect(mapStateToProps)(ProfileStockNewsList)


{/* <Card.Group itemsPerRow={3} divided>
{this.props.news.map((article, index) => 
    <HeadlineNews article={article} key={index} />)
} 
</Card.Group>  */}



