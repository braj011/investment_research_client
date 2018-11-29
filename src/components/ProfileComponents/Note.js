import React, { Component } from 'react'
import { Button } from 'semantic-ui-react' 
import { connect } from 'react-redux'

import API from '../../API'
import NoteItem from './NoteItem'

import { addNewNote } from '../../actions/noteActions'

class Note extends Component {

  state = {
    addNoteClick: false,
    newNote: "",
    newNoteContent: ""
  }

//  componentDidMount() {

//  }

  // Process of adding a NOTE 

  handleClick = () => {
    this.setState({ addNoteClick: !this.state.addNoteClick })
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addNote = (e) => {
    e.preventDefault()
    // console.log("this.props.selectedStock:", this.props.selectedStock)
    API.addNote(this.state.newNote, this.state.newNoteContent, this.props.selectedStock) 
      .then(data => this.props.addNewNoteAction(data))
      .then(() => this.setState({ newNote: '', newNoteContent: '',  addNoteClick: false}))
  }

  // reverseNotes = () => {
  //   const notesReverseOrder = this.props.notes.slice(0).reverse
  //   console.log(notesReverseOrder)
  //   return notesReverseOrder
  // }

  

  render() {
    const { handleClick, handleInput, addNote } = this
    
    return(
      <div>NOTES
        <div>
            <Button className="plus-btn" onClick={handleClick}> + </Button>
             { !this.state.addNoteClick ? 
                null 
                :
                <form>
                  <input type="text" className="form-control" name="newNote" placeholder="Add Title" value={this.state.newNote} 
                    onChange={handleInput} /> 
                  <input type="text" className="form-control" name="newNoteContent" placeholder="Add Content" value={this.state.newNoteContent} 
                  onChange={handleInput} /> 
                  <input type="submit" onClick={addNote}/> 
                </form>
            }   
            <div> 
              {this.props.notes.slice(0).reverse().map((note, index) => <NoteItem note={note} key={index} />)}
            </div>
        </div> 
      </div>
    ) 
  }

} 

const mapStateToProps = (state) => {
  return {
    selectedStock: state.stockStore.selectedStock,
    notes: state.noteStore.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    addNewNoteAction: (newNote) => addNewNote(dispatch, newNote)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);