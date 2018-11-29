import React, { Component } from 'react';
// import { Route, withRouter, Link } from 'react-router-dom'
import '../App.css';
import StockList from './ProfileComponents/StockList';
import ProfileStockNewsList from './ProfileComponents/ProfileStockNewsList';
import ProfileStockNewsItem from './ProfileComponents/ProfileStockNewsItem'
import SelectedStockNews from './ProfileComponents/SelectedStockNews';
import Note from './ProfileComponents/Note';
import { connect } from 'react-redux';
import { Grid, Card } from 'semantic-ui-react'

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

  render() {
    return(
      <div>
        <header> PROFILE PAGE
        </header>
        <div className="whole-profile-container">

          <span className="stock-list">
            <StockList /> 
          </span>

          

          {!this.props.selectedStock ? 
            <span className="all-your-stock-news">
              <ProfileStockNewsList /> 
            </span>
            :
            <Grid>
              <Grid.Column  color="olive" className="specific-single-stock-news"> 
                <Card.Group itemsPerRow={2}> 
                  {/* <p> {this.props.selectedStock.name} </p>  */}
                  {this.getSingleStockArticles} 
                  {/* 20:22 note - this does not error out but nothing renders */}
                </Card.Group> 
              </Grid.Column>


              <Grid.Column className="stock-notes" > 
                  <Note />
              </Grid.Column>
            </Grid> 
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

