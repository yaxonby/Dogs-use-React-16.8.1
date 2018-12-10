import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import App from './App'
import rootReducer from './reducers/index'

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

// SSR to development
function getComponent() {

  return import('lodash').then(({ default: _ }) => {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }).catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
   document.body.appendChild(component);
  })
