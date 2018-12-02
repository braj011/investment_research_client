import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react' 
import { connect } from 'react-redux'

import API from '../../API'
import NoteItem from './NoteItem'

import { addNewNote } from '../../actions/noteActions'

class Note extends Component {

  state = {
    addNoteClick: false,
    newNote: "",
    newNoteContent: "",
    newNoteUrl: ""
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
    API.addNote(this.state.newNote, this.state.newNoteContent, this.state.newNoteUrl, this.props.selectedStock) 
      .then(data =>
        !data ? 
        alert("You need to include a Title and Content to this note")
        :  
        this.props.addNewNoteAction(data)
      ).
      then(() => this.setState({ newNote: '', newNoteContent: '', newNoteUrl: '',  addNoteClick: false}))
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
                <Form>
                  <input type="text" className="form-control" name="newNote" placeholder="Add Title" value={this.state.newNote} 
                    onChange={handleInput} /> 
                  <input type="text" className="form-control" name="newNoteContent" placeholder="Add Content" value={this.state.newNoteContent} 
                  onChange={handleInput} /> 
                  <input type="text" className="form-control" name="newNoteUrl" placeholder="Add a link to an article (optional)" value={this.state.newNoteUrl} 
                  onChange={handleInput} /> 
                  <Button type="submit" onClick={addNote}>Submit</Button> 
                </Form>
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