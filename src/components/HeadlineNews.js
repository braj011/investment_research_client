import React, { Component } from 'react'

const HeadlineNews = (props) => {

  return (
    <div>
      <ul> 
        {props.article.title} - {props.article.author}
      </ul>
    </div>
  ) 
}

export default HeadlineNews