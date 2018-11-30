import React, { Component } from 'react';
import { Card, Button, Image } from 'semantic-ui-react'

const SelectedStockNews = (props) => {
 
  return (
    <Card fluid> DISPLAY SINGLE STOCK NEWS
      <h1 className="display-2 text-centre">
        <a href={props.article.url}>{props.article.title}</a>
      </h1>  
       <div>
        CONTENT: {props.article.content} 
        {props.article.source.name}
      </div>
      <Image size="large" src={props.article.urlToImage} alt={props.article.description} />
      <div className="row pt-4 text-left">
        DESCRIPTION: {props.article.description} 
      </div>
     
        <div className="More-button">
          <a href={props.article.url}>
            <Button className="btn btn-outline-secondary">More</Button>
          </a>
        </div>
    </Card> 
  ) 
}

export default SelectedStockNews