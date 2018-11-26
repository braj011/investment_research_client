import React, { Component } from 'react'
import { Button } from 'react-bootstrap' 


const StockListItem = (props) => {

  return (
    <div>
      <Button bsStyle="primary" bsSize="large"> 
        {props.stock.name}
      </Button>
      
    </div>
  ) 

} 


export default StockListItem