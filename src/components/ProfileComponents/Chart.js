import React, { Component } from 'react'
import { connect } from 'react-redux';
// import Chart from 'chart.js'

import { Line } from 'react-chartjs-2'

class Chart extends Component{

  // state = {
  //   localChartData: {}
  // }

  // componentWillMount(){
  //   this.setChartData()
  // }
  // this.props.stockData.reduce( (object, [close, price]) => (object[close]=price, object), {}) 

  setChartData =() => {
   let chartData = {
      labels: this.props.stockData.map(array => array[0]), // this.props.stockData.
      datasets: [
        {
          label: `${this.props.selectedStock.name} price data`,
          data: this.props.stockData.map(array => array[1]),
          borderColor: "rgba(75,192,192,1)",
          borderJoinStyle: "miter"
        }
      ]
    }
    // debugger
    return chartData
  }

   // className="chart">CHART COMPONENT
  render() {
    return(
      <div>
        <Line className="line-chart" 
        data={this.setChartData} pointBackgroundColor="#c07171" 
        width={900}
        height={100}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: true,
            labels: {
                fontColor: 'black',
                fontSize: 18
            }
          }}
        }
        />
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