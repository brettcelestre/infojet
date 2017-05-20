import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'Username',
      password: 'Password',
      confirm: 'Confirm Password'
    };
  }

  render() {
    return (
      <div>
        SignUp Section
      </div>
    );
  }

}

export default SignUp;
