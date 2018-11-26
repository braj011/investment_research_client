import React, { Component } from 'react'
import StockListItem from './StockListItem'
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap' 

import { addNewStock } from '../../actions/stockActions'

import API from '../../API'

class StockList extends Component {

  state = {
    addStockClick: false,
    newStock: ""
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
      .then(data => {
        API.createUserStock(data.id, this.props.userID)
        this.props.addNewStock(data)
      }).then(() => this.setState({ newStock: '',  addStockClick: false}))
  }

 

  render() {
    const { handleClick, handleInput, addStock } = this
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
        {this.props.userStocks.map((stock, index) => <StockListItem stock={stock} key={index} />)}
          
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
    addNewStock: (newStock) => addNewStock(dispatch, newStock)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(StockList);