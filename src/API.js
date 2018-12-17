
export default class API  {

  static getNewsHeadlines = () => {
    return fetch('https://stock-note-server.herokuapp.com/api/v1/news_apis/')
    // return fetch('http://localhost:3000/api/v1/news_apis/')
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
    this.baseUrl = 'https://stock-note-server.herokuapp.com/api/v1'
    // this.baseUrl = 'http://localhost:3000/api/v1'
    this.loginUrl = this.baseUrl + '/login'
    this.signupUrl = this.baseUrl + '/signup'
    this.validateUrl = this.baseUrl + '/validate'

    this.profileUrl = this.baseUrl + '/users'
    this.searchNewsUrl = this.baseUrl + 'search_news'

    this.stockUrl = this.baseUrl + '/stocks'
    this.userStockUrl = this.baseUrl + '/user_stocks'

    this.noteUrl = this.baseUrl + '/notes'
    this.getUserNotesUrl = this.baseUrl + '/get_user_notes'

    this.stockDataUrl = "https://api.iextrading.com/1.0/stock/"
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

  static searchNews (searchTerm) {
    return fetch('https://stock-note-server.herokuapp.com/api/v1/news_apis/', {
    // return fetch('http://localhost:3000/api/v1/news_apis/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'query': searchTerm.join(" OR "),
          'sort': 'relevancy'
        })
      }).then(resp => resp.json())
        .then(newsData => newsData.articles.filter(article => !!article.source.name)) 
        .then(news => this.props.updateProfileNews(news))
  }


  //  STOCKS
  //  Stock and User Stock both get created in UserStockController - serverside

  static createUserStock (newStock, newStockTicker) {
    console.log("newStockItem:", newStock, newStockTicker) // works
    const token = localStorage.getItem('token')
    return fetch(this.userStockUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token  
      },
      body: JSON.stringify({
        'name': newStock,
        'ticker': newStockTicker
      })
    })
    .then(resp =>  resp.json())
  } 

  static deleteUserStock (selectedStock) {
    const token = localStorage.getItem('token')
    return fetch(`${this.userStockUrl}/${selectedStock.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token  
      },
      body: JSON.stringify({
        'id' : selectedStock.id,
        'type' : 'delete'
      })
    }).then(resp => resp.json())
  }

  //  NOTES

  static addNote (newNote, newNoteContent, newNoteUrl, notifDate, userStock) {
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
        'article_url' : newNoteUrl,
        'notif_date' : notifDate,
        'stock_id': userStock.id
      })
    }).then(data => console.log(data))
    // .then(resp => resp.json())
  }

  static getExistingNotes = (stock) => {
    const token = localStorage.getItem('token')
    return fetch("https://stock-note-server.herokuapp.com/api/v1/get_user_notes", {
      // return fetch("http://localhost:3000/api/v1/get_user_notes", {
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


  // TOT DELETE a UserStock - potentially need to delete all notes first attached to the user_stock
  // Therefore, maybe need 2 crud actions, one to notes controller, one to user_stock controller
  // static deleteNotes = (stock) => {
  //   const token = localStorage.getItem('token')
  //   // debugger
  //   return fetch("http://localhost:3000/api/v1/get_user_notes", {
  //     method: 'POST',
  //     headers: { 
  //       'Content-Type': 'application/json',
  //       'Authorization': token 
  //     },
  //     body: JSON.stringify({
  //       'stock_id': stock.id
  //     })
  //   }).then(resp => resp.json())  
  // }

  // FINANCIAL DATA
  // uses selectedStock frm the store to form the url for GET request so moved to StockList

}



API.init()

window.API = API
