import React, { Component } from 'react';
// import { Route, withRouter, Link } from 'react-router-dom'
import '../App.css';
import StockList from './ProfileComponents/StockList';
import ProfileStockNewsList from './ProfileComponents/ProfileStockNewsList';
import ProfileStockNewsItem from './ProfileComponents/ProfileStockNewsItem'
// import HighCharts from './ProfileComponents/HighCharts';

import Chart from './ProfileComponents/Chart';

import Note from './ProfileComponents/Note';
import { connect } from 'react-redux';
import { Grid, Card, Button } from 'semantic-ui-react'

class Profile extends Component {


  // fakeArticles = () => {
  //   return  [...Array(100)].map((val, i) => `Article ${i}`);
  // }

  // fakeNotes = () => {
  //   return  [...Array(50)].map((val, i) => `Note ${i}`);
  // }

  getSingleStockArticles = () => {
    this.props.profileNews.map((article, index) => <ProfileStockNewsItem article={article} key={index} />)
  }

  googleStockData = () => {
    const q = `${this.props.selectedStock.name} share price`
    const url = "http://google.com/search?q=" + q
    window.open(url, '_blank')
  }

  render() {
    return(
      <div>
        <div className="whole-profile-container">

          <div className="stock-list">
            <StockList getProfileNews={this.props.getProfileNews} /> 
          </div>

          {!this.props.selectedStock ? 
            <span className="all-your-stock-news">
              <ProfileStockNewsList /> 
            </span>
            :
            <div className="single-stock-full-container">
              <Grid className="col1-chart-and-news">
                <Grid.Row className="chart-container">
                  <Chart />
                </Grid.Row>
                <Grid.Row>
                  <Button className="google-stock" onClick={() => this.googleStockData()}> Get more complete {this.props.selectedStock.name} price data</Button>
                </Grid.Row> 
                <Grid.Row  className="specific-single-stock-news"> 
                  <ProfileStockNewsList /> 
                </Grid.Row>
              </Grid>
                <Grid className="stock-notes"> 
                    <Grid.Column  > 
                        <Note />
                    </Grid.Column>
                </Grid> 
              </div>
            
            
          }
          </div>

      </div>
    )
  } 
} 

const mapStateToProps =(state) => {
  return {
    selectedStock: state.stockStore.selectedStock,
    profileNews: state.newsStore.profileNews,
  } 
}

export default connect(mapStateToProps)(Profile)

