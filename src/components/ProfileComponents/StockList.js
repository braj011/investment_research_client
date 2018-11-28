import React, { Component } from 'react'
import StockListItem from './StockListItem'
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react' 

import { addNewStock, selectStock } from '../../actions/stockActions'
import { loadUserStockNotes } from '../../actions/noteActions'

import API from '../../API'

class StockList extends Component {

  state = {
    addStockClick: false,
    newStock: ""
    // selectedStock: ""
  }
  
  // Process of adding a stock 

  handleClick = () => {
    this.setState({ addStockClick: !this.state.addStockClick })
}

  handleInput = (e) => {
    this.setState({ newStock: e.target.value })
  }
  // add a UserStock - i.e. the association - 2 different API methods here 

  addStock = (e) => {
    e.preventDefault()
    API.addStock(this.state.newStock) // works
      // .then(stock => console.log(stock))       e.g.  {id: 6, name: "Google", created_at: "2018-11-28T15:32:44.631Z", updated_at: "2018-11-28T15:32:44.631Z"}
      .then(stock => API.createUserStock(stock.id, this.props.userID))
            // // .then(data => API.createUserStock(data.id, this.props.userID))    // Weds 15:14 - perhaps I need to send over the whole data(i.e. the stock) to the creation, not just stock.id and this.props.userID
        // .then(userStock => console.log(userStock))  // e.g. {id: 5, user_id: 1, stock_id: 10, created_at: "2018-11-28T15:52:33.161Z", updated_at: "2018-11-28T15:52:33.161Z"}
        //  WRONG - .then(userStock => this.props.loadNewAndExistingStocks(userStock))
        .then(userStock => { console.log(userStock) 
          this.props.addNewStock(userStock)
        })
        // .then(existingStockList => this.props.loadUserStocks(existingStockList))
    
      // this.setState({ newStock: '',  addStockClick: false})
          // .then(() => this.setState({ newStock: '',  addStockClick: false}))
  }

  selectStock = (stock) => {
    this.props.selectStockAction(stock)
    API.getExistingNotes(stock)
      .then((existingNotes) => this.props.loadUserStockNotes(existingNotes))
  }
 

  render() {
    const { handleClick, handleInput, addStock, selectStock } = this
    return(
      <div>
        <div>
            <Button className="plus-btn" type="button" onClick={handleClick}> + </Button>
        </div>
        { !this.state.addStockClick ? 
          null 
          :
          <form onSubmit={addStock}>
            <input type="text" className="form-control" name="newStock" placeholder="Add Stock" value={this.state.newStock} 
              onChange={handleInput}/> 

          </form>
        }
        {this.props.userStocks.map((stock, index) => <StockListItem stock={stock} key={index} selectStock={selectStock} />)}
          
      </div>
    ) 
  }

} 

const mapStateToProps = (state) => {
  return { 
    userStocks: state.stockStore.userStocks,
    userID: state.authStore.userID
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    addNewStock: (newStock) => addNewStock(dispatch, newStock),
    // loadNewAndExistingStocks: (allStocks) => loadNewAndExistingStocks(dispatch, allStocks),
    selectStockAction: (selectedStock) => selectStock(dispatch, selectedStock),
    loadUserStockNotes: (existingNotes) => loadUserStockNotes(dispatch, existingNotes) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(StockList);