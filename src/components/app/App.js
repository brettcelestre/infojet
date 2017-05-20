import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import logo from '../../logo.svg';
import './App.css';

import Login from '../login/Login';
import SignUp from '../signup/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to InfoJet</h2>
        </div>

        <Login />
        <SignUp />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
