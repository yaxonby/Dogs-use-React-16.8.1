import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from "react"
import './styles/index.css';
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import rootReducer from "./reducers/index";
import { BrowserRouter } from 'react-router-dom';
import App from "./App.js";
import Loadable from 'react-loadable';
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(rootReducer, applyMiddleware(...middleware))

ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
), document.getElementById('root'))


//import lodash from 'lodash';




function getComponent() {

return import('lodash').then(({ default: _ }) => {
var element = document.createElement('div');
element.innerHTML = _.join(['Hello', 'webpack'], ' ');
     return element;
   }).catch(error => 'An error occurred while loading the component');
  }

 getComponent().then(component => {
   document.body.appendChild(component);
  })
