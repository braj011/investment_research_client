import React from 'react'

const ProfileNewsStockItem = (props) => {

  return (
    <div>
      <ul> 
        {props.article.title} - {props.article.author}
      </ul>
    </div>
  ) 
}

export default ProfileNewsStockItem