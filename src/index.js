import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app/App.js';
import Header from './components/header/Header.js';
import Login from './components/login/Login.js';
import SignUp from './components/signup/SignUp.js';

import './index.css';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <div>
        <Route path="/" component={Header} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
