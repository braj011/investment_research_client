
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

  static init () {
    this.baseUrl = 'http://localhost:3000/api/v1'
    this.loginUrl = this.baseUrl + '/login'
    this.signupUrl = this.baseUrl + '/signup'
    this.validateUrl = this.baseUrl + '/validate'
  }

  
  //  re-usable snippet for getting token 
  static get (url) {
    const token = localStorage.getItem('token')
    return fetch(url, {
      headers: {'Authorization': token}
    }).then(resp => resp.json())
  }

  static validate () {
    return this.get(this.validateUrl)
  }

  static login (email, password) {
    console.log(this.loginUrl)
    return fetch(this.loginUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    }).then(resp => resp.json())
  }
  
  static signup (firstName, email, password) {
    return fetch(this.signupUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({
        firstName,
        email,
        password
      })
    }).then(resp => resp.json())
  }


} 

API.init()

window.API = API
