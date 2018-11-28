import React from 'react'

import { Search } from 'semantic-ui-react'


class FilterArticle extends React.Component {

  state = {
    filterInput: ""
  }

  handleFilter = (event) => {
    this.setState({
      filterInput: event.target.value
    })
  }

  // submitSearch = 

  render() {
    return(
      <div> 
        <Search showNoResults
          name="filterInput"
          value={this.state.filterInput}
          placeholder="Filter articles by key words">
        </Search>
      </div> 
    ) 
  } 

} 

export default FilterArticle