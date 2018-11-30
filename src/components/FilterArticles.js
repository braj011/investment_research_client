import React from 'react'

import { Input } from 'semantic-ui-react'
import { connect } from 'react-redux';


class FilterArticle extends React.Component {

  state = {
    filterInput: ""
  }

  handleFilter = (event) => {
    this.setState({
      filterInput: event.target.value
    })
  }

  //  if logged in - filter alters the Profile news store state 




  render() {
    return(
      <div> 
        <Input
          icon="search"
          name="filterInput"
          onChange={this.handleFilter}
          value={this.state.filterInput}
          placeholder="Filter articles by key words">
        </Input>
      </div> 
    ) 
  } 

} 

export default FilterArticle