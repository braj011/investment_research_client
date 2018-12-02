import React from 'react'
import { Card } from 'semantic-ui-react'

const NoteItem = (props) => {

  return (
    <Card  className="note-card" fluid divided>
        <Card.Content header={props.note.updated_at.replace(/-/g,'/').substr(0,10)} /> 
        <Card.Content size="small" description={props.note.title} />
        <Card.Content description={props.note.content} />
        {!props.note.article_url ? 
          null 
          :
          <Card.Content description={props.note.article_url} />
        } 
        {/* DECIDE HOW TO DIPLAY THE ARTICLE URL  - STYLE THIS APPROPRIATELY  */}
    </Card>
  ) 
}

export default NoteItem