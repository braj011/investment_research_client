import React, { Component } from 'react'
import StockListItem from './StockListItem'
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap' 

import API from '../../API'

class StockList extends Component {
  
   addStock = (e) => {
     e.preventDefault()
    //  API.addStock(this.state.newCategory)


   }

  // add a stock 
  // add a UserStock - i.e. the association - 2 different API methods here 

 

  render() {
    return(
      <div>
        <div>
            <Button className="plus-btn" type="button"> + </Button>
          </div>
        {this.props.userStocks.map((stock, index) => <StockListItem stock={stock} key={index} />)}
          
      </div>
    ) 
  }

} 

const mapStateToProps = (state) => {
  return { userStocks: state.stockStore.userStocks }

}


export default connect(mapStateToProps)(StockList);