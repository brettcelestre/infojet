import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Route } from 'react-router-dom';

import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      notifications: 0
    };
  }

  render() {
    return (
      <div className="header">

        <Link to="/">
          INFOJET
        </Link>

        <input
          type="text"
          className="form-control"
          placeholder="Search Infojet"
        />

        <Link to="/login">
          Login
        </Link>

        <Link to="/signup">
          Sign Up
        </Link>
      </div>
    );
  }

}

export default Header;
