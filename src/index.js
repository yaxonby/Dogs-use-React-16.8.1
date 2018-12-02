import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from "react"
//import '../semantic/dist/semantic.min.css';
import './styles/index.css';
import { Router, Route} from 'react-router'
//import { Router, Route, IndexRoute, browserHistory, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import App from "./App.js";
import CardDog from "./Components/CardDogComponent";


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))



/*
ReactDOM.render(
	<Router history={browserHistory}>
	    <Route path='/' component={App}>
	      <IndexRoute component={CardDog} />
	      <Route path='admin' component={Admin} />
	      <Route path='carddog' component={CardDog} />
	    </Route>
	  </Router>,
, document.getElementById('root')
);
*/
