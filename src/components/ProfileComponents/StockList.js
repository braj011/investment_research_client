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

  addUserStock = (e) => {
    e.preventDefault()
    API.createUserStock(this.state.newStock)
      .then(userStock => {
        console.log("userStock returned:", userStock) // data Object containing an array on a userStock object
        this.props.addNewStock(userStock)
      })
        .then(data => console.log(data))
  

      //     this.props.addNewStock(userStock)
      //   })
        // .then(existingStockList => this.props.loadUserStocks(existingStockList))
    
      // this.setState({ newStock: '',  addStockClick: false})
          // .then(() => this.setState({ newStock: '',  addStockClick: false}))
  }

  selectStock = (stock) => {
    this.props.selectStockAction(stock)
    // debugger
    API.getExistingNotes(stock)
      // .then(notes array  => console.log(notes array))
      .then((existingNotes) => this.props.loadUserStockNotes(existingNotes)
        )
    }
 

  render() {
    const { handleClick, handleInput, addUserStock, selectStock } = this
    
    return(
      <div>
        <div>
            <Button className="plus-btn" type="button" onClick={handleClick}> + </Button>
        </div>
        { !this.state.addStockClick ? 
          null 
          :
          <form onSubmit={addUserStock}>
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