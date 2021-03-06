import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import authReducer from './store/reducer/authReducer'
// import loadingReducer from './store/reducer';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { rootReducer } from './store/reducer/index';


// const rootReducer = combineReducers({
//   auth: authReducer,
//   loading: loadingReducer
// })


const logger = store => {
  return next => {
    return action => {
      console.log('Middleware Dispatching..', action);
      const result = next(action);
      console.log("Middleware next state", store.getState())
      return result
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
