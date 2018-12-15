import React, { Component } from 'react'
import StockListItem from './StockListItem'
import { connect } from 'react-redux';
import { Button, Icon, Form, Divider } from 'semantic-ui-react' 

import { addNewStock, selectStock, deselectStockAction, removeUserStock } from '../../actions/stockActions'
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
        // console.log("userStock returned:", userStock) // data Object containing an array on a userStock object
        this.props.addNewStock(userStock) // works with ticker
        } 
      }).then(() => this.props.getProfileNews(this.props.userStocks))
      .then(() => this.setState({ newStock: '', newStockTicker: '', addStockClick: false}))
  }

  selectStock = (stock) => {
    this.getSingleStocknews(stock)
    this.props.selectStockAction(stock)
    console.log("stock:", stock, "stock.ticker:", stock.ticker)
    this.getStockData(stock)
    API.getExistingNotes(stock)
      .then((existingNotes) => this.props.loadUserStockNotes(existingNotes))
    }
  
  getSingleStocknews = (stock) => {
    // return fetch('https://stock-note-server.herokuapp.com/api/v1/news_apis/', {
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
   let stockDataUrl = `https://api.iextrading.com/1.0/stock/` + stock.ticker + `/chart/1y`
   console.log("stockData Url:", stockDataUrl)
   return fetch(stockDataUrl)
      .then(data => data.json())
      .then(stockData => this.props.updateStockData(stockData)) // add this action / dispatch from the newly created dataReducer
      .catch(error => console.log(error))
  }  

  goBack = () => {
    this.props.getProfileNews()
    this.props.deselectStockAction()
  } 

  deleteUserStock = () => {
    API.deleteUserStock(this.props.selectedStock)
    this.props.removeUserStock(this.props.selectedStock) // an action to remove stock from stocklist on frontend
    setTimeout(this.props.getProfileNews, 50)
  }

  render() {
    const { handleClick, handleInput, addUserStock, selectStock, goBack, deleteUserStock } = this
    
    return(

      <div className="grey-text-larger"> Your Stocks
        <p></p>
        {this.props.userStocks.map((stock, index) => <StockListItem stock={stock} key={index} selectStock={selectStock} />)}
        {/* {this.props.userStocks.length > 0 ? <Divider/> : null } */}
        <div>
            <Button className="plus-btn" type="button" onClick={handleClick}> 
              { !this.state.addStockClick ? "Add a Stock +" : "Add a Stock -" } </Button>
        </div>
        
        { !this.state.addStockClick ? 
          null 
          :
          <Form>
            <input type="text" className="stock-form" name="newStock" placeholder="Add Stock" value={this.state.newStock} 
              onChange={handleInput}/> 
            <input type="text" className="stock-form" name="newStockTicker" placeholder="Add a Ticker" value={this.state.newStockTicker} 
              onChange={handleInput}/> 
            <Button type="submit" className="submit" onClick={addUserStock} >Submit</Button> 
          </Form>
        }
        <p></p>
        {!this.props.selectedStock ? 
          null 
          :        
          <div>
            <Button className="delete-stock" type="button" onClick={deleteUserStock}>Delete stock</Button>
             <p/>
            <Button className="angle double left" type="button" onClick={goBack}>BACK</Button>
          </div>
        } 
          
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
    removeUserStock: (stockToRemove) => removeUserStock(dispatch, stockToRemove),
    loadUserStockNotes: (existingNotes) => loadUserStockNotes(dispatch, existingNotes), 
    updateProfileNews: (news) => updateProfileNews(dispatch, news),
    updateStockData: (stockData) => updateStockData(dispatch, stockData)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(StockList);