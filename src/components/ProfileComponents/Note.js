import React, { Component } from 'react'

import { Button, Form, Checkbox } from 'semantic-ui-react' 
import { connect } from 'react-redux'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import API from '../../API'
import NoteItem from './NoteItem'

import { addNewNote } from '../../actions/noteActions'

class Note extends Component {

  state = {
    addNoteClick: false,
    newNote: "",
    newNoteContent: "",
    newNoteUrl: "",
    notifiClick: false,
    notifDate: ""
    //new Date()
  }

//  componentDidMount() {

//  }

  // Process of adding a NOTE 

  handleClick = () => {
    this.setState({ addNoteClick: !this.state.addNoteClick })
  }

  handleNotifClick = () => {
    this.setState({ notifiClick: !this.state.notifiClick })
  }


  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleDateChange = (date) => {
    this.setState({
      notifDate: date
    })
  }

  addNote = (e) => {
    e.preventDefault()
    // console.log("this.props.selectedStock:", this.props.selectedStock)
    API.addNote(this.state.newNote, this.state.newNoteContent, this.state.newNoteUrl, this.state.notifDate, this.props.selectedStock) 
    // ADD IN ALL THE DATE STUFF
      .then(data =>
        !data ? 
        alert("You need to include a Title and Content to this note")
        :  
        this.props.addNewNoteAction(data)
      ).then(() => this.setState({ newNote: '', newNoteContent: '', newNoteUrl: '', notifDate: '',   addNoteClick: false,  notifiClick: false}))
  } 
  

  // reverseNotes = () => {
  //   const notesReverseOrder = this.props.notes.slice(0).reverse
  //   console.log(notesReverseOrder)
  //   return notesReverseOrder
  // }

  

  render() {
    const { handleClick, handleInput, addNote } = this
    
    return(
      <div>
        <header className="my-notes-nav">My Notes
            <Button className="plus-note-btn" onClick={handleClick}> Add a Note + </Button>
        </header>
        <div>
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
              <p></p>
              <Checkbox label="Send a copy to my email" onClick={this.handleNotifClick}/>
              <p></p>
              {!this.state.notifiClick ? null : 
              <div>
                <p>Set a time and date:</p>
                <span>
                  <DatePicker selected={this.state.notifDate} onChange={this.handleDateChange} 
                  peekNextMonth  dateFormat="dd/MM/yyyy" /> 
                  <DatePicker selected={this.state.notifDate} onChange={this.handleDateChange} 
                  showTimeSelect showTimeSelectOnly timeIntervals={1} dateFormat="h:mm aa" timeCaption="Time"/> 
                </span>
                </div>
              }
              <div>
                <Button type="submit" onClick={addNote}>Submit</Button> 

              </div>
            </Form>
        }  
          </div> 
            <div className="note-display"> 
              {this.props.notes.slice(0).reverse().map((note, index) => <NoteItem note={note} key={index} />)}
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