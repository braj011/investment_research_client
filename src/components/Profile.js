import React, { Component } from 'react';
// import { Route, withRouter, Link } from 'react-router-dom'
import '../App.css';
import StockList from './ProfileComponents/StockList';
import ProfileStockNewsList from './ProfileComponents/ProfileStockNewsList';

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

          <span className="specific-stock-news">
            <ProfileStockNewsList /> 
            {/* <div>Stock news</div>
            <ul>
              {this.fakeArticles().map((item, i) => (<li key={`item_${i}`}>{ item }</li>))}
            </ul> */}
          </span>

          <div className="stock-notes">
          <div>NOTES</div>
            <ul> 
              {this.fakeNotes().map((item, i) => (<li key={`item_${i}`}>{ item }</li>))}
            </ul>
          </div>

        </div> 
      </div>
    )
  } 
} 


// DOES NOT CURRENTLY HAVE A ROUTE TO DISPLAY PAGE!!! - CREATE A ROUTE FOR TESTING

export default Profile