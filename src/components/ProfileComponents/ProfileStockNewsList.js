import React, { Component } from 'react'
import ProfileStockNewsItem from './ProfileStockNewsItem'
// import '../App.css';
import { Card, Input } from 'semantic-ui-react'
import { updateProfileNews } from '../../actions/newsActions'

import { connect } from 'react-redux';

class ProfileStockNewsList extends Component {

  state = {
    filterInput: ""
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

  filterSingleStockNews = () => {
    if (this.props.profileNews.length > 20 ) {
      const filteredNews = [...this.props.profileNews]
      return filteredNews.filter(article => {
        return article.title.toLowerCase().includes(this.state.filterInput.toLowerCase()) 
        || article.description.toLowerCase().includes(this.state.filterInput.toLowerCase()) 
        || article.source.name.includes(this.state.filterInput) 
      })
    }
  }

  // waitForSingleNews = () => {
  //   return setTimeout(() => this.filteredProfileNews(), 500)
  //   // console.log("is this waiting working?")
  // }

  render() {
    const { filteredProfileNews } = this
    return(
      <span>
      <Input className="filter-articles"
        icon="search"
        name="filterInput"
        onChange={this.handleFilter}
        value={this.state.filterInput}
        placeholder="Filter articles by key words">
    </Input>
        {!this.props.selectedStock ?
          <Card.Group className ="multiple-news-card-group" itemsPerRow={3}> 
            {this.filteredProfileNews().map((article, index) => <ProfileStockNewsItem article={article} key={index} />)}
          </Card.Group> 
          :
          <Card.Group centred className ="single-stock-news-card-group" itemsPerRow={2}> 
            { !this.state.filterInput ? 
              this.props.profileNews.map((article, index) => <ProfileStockNewsItem article={article} key={index} filteredProfileNews={filteredProfileNews} />)
            : 
            null
            // { filterSingleStockNews = () => {
            //     if (this.props.profileNews.length > 20 ) {
            //       const filteredNews = [...this.props.profileNews]
            //       return filteredNews.filter(article => {
            //         return article.title.toLowerCase().includes(this.state.filterInput.toLowerCase()) 
            //         || article.description.toLowerCase().includes(this.state.filterInput.toLowerCase()) 
            //         || article.source.name.includes(this.state.filterInput) 
            //       })
            //     }
            //   }
            //   .map((article, index) => <ProfileStockNewsItem article={article} key={index} />)
            //   // this.filterSingleStockNews().map((article, index) => <ProfileStockNewsItem article={article} key={index} />)
            }
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
   
const mapDispatchToProps = (dispatch) => {
  return {
    updateProfileNews: (news) => updateProfileNews(dispatch, news)
  }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(ProfileStockNewsList)
