import 'babel-polyfill';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import App from './components/app/App.js';
import Header from './components/header/Header.js';
import Login from './components/login/Login.js';
import SignUp from './components/signup/SignUp.js';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={Header} />
        <Switch>
          <Route path="/app" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
