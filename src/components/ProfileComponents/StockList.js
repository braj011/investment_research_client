import React, { Component } from 'react'
import StockListItem from './StockListItem'
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react' 

import { addNewStock, selectStock, deselectStockAction } from '../../actions/stockActions'
import { loadUserStockNotes } from '../../actions/noteActions'
import { updateProfileNews } from '../../actions/newsActions'
import { updateStockData } from '../../actions/dataActions'



import API from '../../API'


class StockList extends Component {

  state = {
    addStockClick: false,
    newStock: "",
    newStockTicker: ""
  }
  
  handleClick = () => {
    this.setState({ addStockClick: !this.state.addStockClick })
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  addUserStock = (e) => {
    e.preventDefault()
    API.createUserStock(this.state.newStock, this.state.newStockTicker )
      .then(userStock => { 
        if (userStock.error) {
          alert("You have already added this stock")
        } else {
        console.log("userStock returned:", userStock) // data Object containing an array on a userStock object
        this.props.addNewStock(userStock)
        } 
      })
        .then(data => console.log(data))
  }

  selectStock = (stock) => {
    this.props.selectStockAction(stock)
    this.getSingleStocknews(stock)
    this.getStockData(stock)
    API.getExistingNotes(stock)
      .then((existingNotes) => this.props.loadUserStockNotes(existingNotes))
    }

  
  getSingleStocknews = (stock) => {
    return fetch('http://localhost:3000/api/v1/news_apis/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'query': stock.name,
        'sort': 'relevancy'
      })
    }).then(resp => resp.json())
    .then(news => this.props.updateProfileNews(news.articles))
  }

 getStockData = (stock) => {
    return fetch(`https://api.iextrading.com/1.0/stock/ + ${stock.ticker} + /chart/1y`)
    .then(resp => resp.json())
     .then(stockData => this.props.updateStockData(stockData)) // add this action / dispatch from the newly created dataReducer
  }  
  

  goBack = () => {
    this.props.getProfileNews()
    this.props.deselectStockAction()
  } 

  render() {
    const { handleClick, handleInput, addUserStock, selectStock, goBack } = this
    
    return(
      <div>
        <div>
            <Button className="plus-btn" type="button" onClick={handleClick}> ➕ </Button>
        </div>
        { !this.state.addStockClick ? 
          null 
          :
          <form>
            <input type="text" className="form-control" name="newStock" placeholder="Add Stock" value={this.state.newStock} 
              onChange={handleInput}/> 
            <input type="text" className="form-control" name="newStockTicker" placeholder="Add a Ticker" value={this.state.newStockTicker} 
            onChange={handleInput}/> 
            <input type="submit" onClick={addUserStock}/> 
          </form>
        }
        {this.props.userStocks.map((stock, index) => <StockListItem stock={stock} key={index} selectStock={selectStock} />)}
        <div>
            <Button className="go-back-btn" type="button" onClick={goBack}> 🔙 </Button>
        </div>
          
      </div>
    ) 
  }

} 

const mapStateToProps = (state) => {
  return { 
    userStocks: state.stockStore.userStocks,
    selectedStock: state.stockStore.selectedStock,
    userID: state.authStore.userID
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    addNewStock: (newStock) => addNewStock(dispatch, newStock),
    selectStockAction: (selectedStock) => selectStock(dispatch, selectedStock),
    deselectStockAction: (deselect) => selectStock(dispatch, deselect),
    loadUserStockNotes: (existingNotes) => loadUserStockNotes(dispatch, existingNotes), 
    updateProfileNews: (news) => updateProfileNews(dispatch, news),
    updateStockData: (stockData) => updateStockData(dispatch, stockData)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(StockList);