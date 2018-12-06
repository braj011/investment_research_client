import React from 'react'
import { Button, Divider } from 'semantic-ui-react' 
import { connect } from 'react-redux';


class StockListItem extends React.Component {

  
  render() {
    return (
      <div>
        <Button className="stock-items" onClick={() => this.props.selectStock(this.props.stock)} >
        {/* color={ (this.props.selectedStock === this.props.stock) ? "blue" : "deepseagreen" }>  */}
          {this.props.stock.name}
        </Button>
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