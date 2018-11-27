import React, { Component } from 'react';
// import { Route, withRouter, Link } from 'react-router-dom'
import '../App.css';
import StockList from './ProfileComponents/StockList';
import ProfileStockNewsList from './ProfileComponents/ProfileStockNewsList';
import Note from './ProfileComponents/Note';
import { connect } from 'react-redux';
import { Grid, GridColumn } from 'semantic-ui-react'

class Profile extends Component {


  fakeArticles = () => {
    return  [...Array(100)].map((val, i) => `Article ${i}`);
  }

  fakeNotes = () => {
    return  [...Array(50)].map((val, i) => `Note ${i}`);
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
            <Grid columns="equal">
              <Grid.Column width={10} color="olive"> 
                <span className="specific-single-stock-news">
                  <ProfileStockNewsList /> 
                </span>
              </Grid.Column>

              <Grid.Column> 
                <span className="stock-notes"> 
                  <Note />
                </span>
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
    selectedStock: state.stockStore.selectedStock
  } 
}




// DOES NOT CURRENTLY HAVE A ROUTE TO DISPLAY PAGE!!! - CREATE A ROUTE FOR TESTING

export default connect(mapStateToProps)(Profile)

