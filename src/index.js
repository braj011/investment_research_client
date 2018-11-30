import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import newsReducer from './reducers/newsReducer'
import authReducer from './reducers/authReducer'
import stockReducer from './reducers/stockReducer'
import noteReducer from './reducers/noteReducer'
import dataReducer from './reducers/dataReducer'


const masterReducer = combineReducers({
  newsStore: newsReducer,
  authStore: authReducer,
  stockStore: stockReducer,
  noteStore: noteReducer,
  dataStore: dataReducer
})

const loggerMiddleware = createLogger();

const composeEnhancers = composeWithDevTools({});

const store = createStore(masterReducer, composeEnhancers(applyMiddleware(loggerMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


