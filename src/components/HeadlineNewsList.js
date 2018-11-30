import React, { Component } from 'react'
import HeadlineNews from './HeadlineNews'
import '../App.css';
import { Card, Input } from 'semantic-ui-react'

import { connect } from 'react-redux';

class HeadlineNewsList extends Component {

  //  DO FILTER HERE TOO!!!!
  state = {
    filterInput: ""
  }

  handleFilter = (event) => {
    this.setState({
      filterInput: event.target.value
    })
  }

  filterHeadlineNews = () => {
    const filteredNews = [...this.props.news]
    return filteredNews.filter(article => {
      return article.title.toLowerCase().includes(this.state.filterInput.toLowerCase()) 
      || article.description.toLowerCase().includes(this.state.filterInput.toLowerCase()) 
      || article.source.name.includes(this.state.filterInput) 
    }) 
  }

  render() {
    console.log("Props news from HeadlineNewsList", this.props.news)
    return(
      <span>

        <Input
          icon="search"
          name="filterInput"
          onChange={this.handleFilter}
          value={this.state.filterInput}
          placeholder="Filter articles by key words">
      </Input>
        <Card.Group itemsPerRow={3} divided>
          {this.filterHeadlineNews().map((article, index) => 
              <HeadlineNews article={article} key={index} />)
          } 
        </Card.Group> 
      </span>
    ) 
  }

}

const mapStateToProps = (state) => {
  return { news: state.newsStore.news }
}

export default connect(mapStateToProps)(HeadlineNewsList)