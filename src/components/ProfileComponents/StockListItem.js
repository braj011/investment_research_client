import React from 'react'
import { Button } from 'semantic-ui-react' 


class StockListItem extends React.Component {

  
  render() {
    return (
      <div>
        <Button className="stock-list" onClick={() => this.props.selectStock(this.props.stock)} > 
          {this.props.stock.name}
        </Button>
        <br></br>
      </div>
    ) 
  } 

} 


export default StockListItem