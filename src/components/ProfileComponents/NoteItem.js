import React from 'react'
import { Card } from 'semantic-ui-react'

const NoteItem = (props) => {

  return (
    <Card  className="note-card" fluid divided>
        <Card.Content header={props.note.updated_at.replace(/-/g,'/').substr(0,10)} /> 
        <Card.Content size="small" description={props.note.title} />
        <Card.Content description={props.note.content} />
    </Card>
  ) 
}

export default NoteItem