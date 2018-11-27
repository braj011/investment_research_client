import React, { Component } from 'react'
import { Button } from 'semantic-ui-react' 

import API from '../../API'

class Note extends Component {

  // Process of adding a NOTE 

  // handleClick = () => {
  //   this.setState({ addNoteClick: !this.state.addNoteClick })
  // }

  // handleInput = (e) => {
  //   this.setState({ newNote: e.target.value })
  // }

  // add a new Note - ties into Note API - post - i.e. the association - 2 different API methods here 

  // addStock = (e) => {
  //   e.preventDefault()
  //   API.addStock(this.state.newStock) // works
  //     .then(data => {
  //       API.createUserStock(data.id, this.props.userID)
  //       this.props.addNewStock(data)
  //     }).then(() => this.setState({ newStock: '',  addStockClick: false}))
  // }

  render() {
    return(
      <div>NOTES
        <div>
            <Button className="plus-btn"
            // onClick={handleClick}
            > + </Button>
        </div> 
      </div>
    ) 
  }

} 



export default Note;