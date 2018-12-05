import React from 'react'
import { Button } from 'semantic-ui-react' 
import { connect } from 'react-redux';


class StockListItem extends React.Component {

  
  render() {
    return (
      <div>
        <Button className="stock-list" onClick={() => this.props.selectStock(this.props.stock)} 
        color={ (this.props.selectedStock === this.props.stock) ? "blue" : "deepseagreen" }> 
          {this.props.stock.name}
        </Button>
        <br></br>
      </div>
    ) 
  } 

} 

const mapStateToProps = (state) => {
  return { 
    selectedStock: state.stockStore.selectedStock
  }
}


export default connect(mapStateToProps)(StockListItem)