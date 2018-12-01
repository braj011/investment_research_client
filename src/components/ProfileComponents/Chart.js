import React, { Component } from 'react'
import { connect } from 'react-redux';
// import Chart from 'chart.js'

import { Line } from 'react-chartjs-2'

class Chart extends Component{

  state = {
    localChartData: {}
  }

  componentWillMount(){
    this.setChartData()
  }

  setChartData =() => {
   let chartData = {
      labels: "Time", // this.props.stockData.
      datasets: [
        {
          label: this.props.selectedStock.name,
          data: this.props.stockData.map( stock => stock[1])
        }
      ]
    }
    this.setState({
      localChartData: chartData 
    })
  }

  
  render() {
    return(
      <div className="chart">CHART COMPONENT
        {/* <Line 
          data={this.state.localChartData} 
        /> */}
      </div>

    )
  }

}

const mapStateToProps = (state) => {
  return {
    selectedStock: state.stockStore.selectedStock,
    stockData: state.dataStore.stockData
  }
} 

export default connect(mapStateToProps)(Chart) 