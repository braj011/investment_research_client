
export default class API  {

  static getNewsHeadlines = () => {
    return fetch('http://localhost:3000/api/v1/news_apis/')
      .then(resp => resp.json())
      .then(newsData => {
        return newsData.articles.map(article => {
          if (!article.author) {
            return {...article, author: "Unknown"}
          } else {
            return article
          }
        })
      }) 
  } 

} 
