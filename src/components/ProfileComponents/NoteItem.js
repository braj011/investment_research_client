import React from 'react'
import { List } from 'semantic-ui-react'

const NoteItem = (props) => {

  return (
    <List divided>
      <List.Content> 
       <List.Header size="large">{props.note.title}</List.Header>
       <List.Description>{props.note.content}</List.Description>
      </List.Content>
    </List>
  ) 
}

export default NoteItem