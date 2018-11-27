import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import newsReducer from './reducers/newsReducer'
import authReducer from './reducers/authReducer'
import stockReducer from './reducers/stockReducer'
import noteReducer from './reducers/noteReducer'


const masterReducer = combineReducers({
  newsStore: newsReducer,
  authStore: authReducer,
  stockStore: stockReducer,
  noteStore: noteReducer  
})

const store = createStore(masterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


