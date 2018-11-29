
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

    this.profileUrl = this.baseUrl + '/users'

    this.stockUrl = this.baseUrl + '/stocks'
    this.userStockUrl = this.baseUrl + '/user_stocks'

    this.noteUrl = this.baseUrl + '/notes'
    this.getUserNotesUrl = this.baseUrl + '/get_user_notes'
  }

  
  //  re-usable snippet for getting token 
  static get (url) {
    const token = localStorage.getItem('token')
    return fetch(url, {
      headers: {'Authorization': token}
    })
    .then(resp => resp.json())
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

  static getProfile (id) {
    return this.get(`${this.profileUrl}/${id}`)
  }


  //  STOCKS
  //  Stock and User Stock both get created in UserStockController - serverside

  static createUserStock (newStock) {
    const token = localStorage.getItem('token')
    return fetch(this.userStockUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token  
      },
      body: JSON.stringify({
        'name': newStock
      })
    })
    .then(resp =>  resp.json())
  } 



  //  NOTES

  static addNote (newNote, newNoteContent, userStock) {
    const token = localStorage.getItem('token')
    return fetch(this.noteUrl, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': token 
            //  pass in user authorisation header - so that you don't have to do user id
      },
      body: JSON.stringify({
        'title' : newNote,
        'content': newNoteContent,
        'stock_id': userStock.id
      })
    }).then(resp => resp.json())  

  }

  static getExistingNotes = (stock) => {
    const token = localStorage.getItem('token')
    // debugger
    return fetch("http://localhost:3000/api/v1/get_user_notes", {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': token 
      },
      body: JSON.stringify({
        'stock_id': stock.id
      })
    }).then(resp => resp.json())  
  }

}



API.init()

window.API = API
