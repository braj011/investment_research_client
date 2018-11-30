import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

const ProfileNewsStockItem = (props) => {
 
  return (
    <Card>
      <h1 className="display-2 text-centre">
        <a href={props.article.url}>{props.article.title}</a>
      </h1> 
      <div>
        {props.article.source.name}
      </div>
      <Image className="card-image" size="medium" floated="centre" src={props.article.urlToImage} alt={props.article.content} />
      <div className="row pt-4 text-left">
        {props.article.description} 
      </div>
     
        <div className="More-button">
          <a href={props.article.url} target="_blank">
            <Button className="btn btn-outline-secondary">More</Button>
          </a>
        </div>
    </Card> 
    // <div>
    //   <ul> 
    //     {props.article.title} - {props.article.author}
    //   </ul>
    // </div>
  ) 
}

export default ProfileNewsStockItem



{/* <Card fluid>
          <h1 className="display-2 text-centre">
            <a href={props.article.url}>{props.article.title}</a>
          </h1> 
          <div className="meta">
            {props.article.source.name}
          </div>
          <Image size="large" src={props.article.urlToImage} alt={props.article.content} />
        <div className="row pt-4 text-left">
          {props.article.description} 
        </div>
        <div className="More-button">
          <a href={props.article.url}>
            <Button className="btn btn-outline-secondary">More</Button>
          </a>
        </div>
      </Card> */}