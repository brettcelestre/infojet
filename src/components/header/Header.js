import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { currentUser } from '../../actions/index';

let count = 0;

class Header extends Component {

  componentDidMount(){
    this.props.currentUser();
    console.log('data?', this.props.userData);
  }

  render() {
    console.log('data?', this.props.userData);

    // Add 'Username' to header after Sign Up

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

function mapStateToProps(state) {
  return { userData: state.userData };
}

export default connect(mapStateToProps, { currentUser })(Header);
