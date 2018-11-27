import React from 'react'
import { Button } from 'react-bootstrap' 


const StockListItem = (props) => {

  return (
    <div>
      <Button bsStyle="primary" bsSize="large"> 
        {props.stock.name}
      </Button>
      <br></br>
    </div>
  ) 

} 


export default StockListItem