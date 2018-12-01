import React, { Component } from 'react'
import ProfileStockNewsItem from './ProfileStockNewsItem'
// import '../App.css';
import { Card, Input } from 'semantic-ui-react'

import { connect } from 'react-redux';

class ProfileStockNewsList extends Component {

  state = {
    filterInput: ""
  }

  copyToClip = () => {

  }

  handleFilter = (event) => {
    this.setState({
      filterInput: event.target.value
    })
  }

  filteredProfileNews = () => {
    const filteredNews = [...this.props.profileNews]
    return filteredNews.filter(article => {
      return article.title.toLowerCase().includes(this.state.filterInput.toLowerCase()) 
      || article.description.toLowerCase().includes(this.state.filterInput.toLowerCase()) 
      || article.source.name.includes(this.state.filterInput) 
    }) 
  }



  render() {
    console.log("Profile news:", this.props.profileNews)
    console.log("props at profilenewslist", this.props)

    return(
      <span>
      <Input
        icon="search"
        name="filterInput"
        onChange={this.handleFilter}
        value={this.state.filterInput}
        placeholder="Filter articles by key words">
    </Input>
        {!this.props.selectedStock ? 
          <Card.Group itemsPerRow={3}> 
            {this.filteredProfileNews().map((article, index) => <ProfileStockNewsItem article={article} key={index} />)}
          </Card.Group> 
        :
          <Card.Group centred className ="single-stock-news-card-group" itemsPerRow={2}> 
            {this.filteredProfileNews().map((article, index) => <ProfileStockNewsItem article={article} key={index} />)}
          </Card.Group> 
        }
      </span>
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




