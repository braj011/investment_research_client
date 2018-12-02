import React from 'react'
import '../App.css'
import { Card, Button, Image,  Divider } from 'semantic-ui-react'

const HeadlineNews = (props) => {

  return (


      <Card fluid>
          <h1 className="display-2 text-centre">
            <a href={props.article.url} target="_blank" rel="noopener noreferrer">{props.article.title}</a>
          </h1> 
          <div className="meta">
            {props.article.source.name}
          </div>
          <Image size="large" src={props.article.urlToImage} alt={props.article.content} />
        <div className="row pt-4 text-left">
          {props.article.description} 
        </div>
        <div className="More-button">
          <a href={props.article.url} target="_blank" rel="noopener noreferrer">
            <Button className="btn btn-outline-secondary">Read more..</Button>
          </a>
        </div>
      </Card>
      

    // <div class="card text-white bg-secondary mb-3">
    //   <ul> 
    //     {props.article.title} - {props.article.author}
    //   </ul>
    // </div>
  ) 
}

export default HeadlineNews


