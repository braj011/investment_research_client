# stockNote Frontend (investments-research-platform)

## stockNote is an amateur stocks and shares research platform where a user can:

- create an authenticated user profile
- add stocks to their watchlist
- get news on their selected stocks
- see stock price data for the last year (US stocks only) + a link out to Google Finance for more complete data. 
- add notes / comments to their stocks so that a user can keep track of their thoughts and analysis
- send themselves the notes by email now or at ata future date of their choosing.

Built using React frameork alongside Redux to manage state.
CSS is a mix of custom and Semantic UI.
Backend: Ruby on Rails, with the app hosted on Heroku. Backend repo: https://github.com/braj011/stock_note_server

### Home page
![Alt text](images/homePage.png)

### Profile page - main
![Alt text](images/mainProfile.png) 
On the left-hand side, you can add new stocks / delete existing ones in your portfolio.

### Stock specific page - adding a new note
![Alt text](images/addingNote.png)
On the right hand side, you can add new notes, copy article Urls from the clipboard and paste them into your notes to reference any articles.
You can also choose to send yourself the note by email (more details on Backend repo).
Notes are ordered by most recent first.

### Stock specific page - line chart
![Alt text](images/viewChart.png)
The stock data chart comes from the IEX trading data API (for US stocks only). This uses a stock ticker and is why the user must enter a stock ticker when adding a new stock. 
The line chart is created using the React Chart js library. 


The app is live at http://stock-note.surge.sh/ with the backend hosted on Heroku. Upon arrival, the server may take a few seconds to post news onto the homepage. At this point, one can create an account and add stocks.

NOTE: The deployment to production has a few bugs and I am working through these.
