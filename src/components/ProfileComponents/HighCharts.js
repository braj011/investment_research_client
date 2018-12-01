// import React from 'react'
// import { render } from 'react-dom'
// import Highcharts from 'highcharts/highstock'
// import ReactHighstock from 'react-highcharts'

// import { Grid } from 'semantic-ui-react'

// import API from '../../API'
// import { connect } from 'react-redux';




// class HighCharts extends React.Component {

//   options = () =>  {
//     return {
//       title: {
//         text: this.props.selectedStock.name
//       },
    
//       series: [{
//         data: this.props.stockData
//       }]
//     } 
//   }
  

  
//   render() {
//     return (
//       <ReactHighstock
//         highcharts={Highcharts}
//         constructorType={'stockChart'}
//         options={this.options} />
//     )
//     }


// }

// const mapStateToProps =(state) => {
//   return {
//     selectedStock: state.stockStore.selectedStock,
//     stockData: state.dataStore.stockData
//   } 
// }

// export default connect(mapStateToProps)(HighCharts) 