# stockNote Frontend (investments-research-platform)

## stockNote is an amateur stocks and shares research platform where a user can:

- create an authenticated user profile
- add stocks to their watchlist
- get news on their selected stocks
- see stock price data for the last year (US stocks only) + a link out to Google Finance for more complete data. 
- add notes / comments to their stocks so that a user can keep track of their thoughts and analysis
- send themselves the notes by email now or at ata future date of their choosing.


![Screenshot](images/homePage.png) ![Screenshot](images/mainProfile.png) 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


The app is live at http://stock-note.surge.sh/ with the backend hosted on Heroku. Upon arrival, the server may take a few seconds to post news onto the homepage. At this point, one can create an account and add stocks.

NOTE: The deployment to production has a few bugs and I am working through these.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [https://stock-note-server.herokuapp.com/](https://stock-note-server.herokuapp.com/) to view it in the browser.

<!-- Open [http://localhost:3000](http://localhost:3000) to view it in the browser. -->

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
