import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signUp } from '../../actions/index';

class SignUp extends Component {

  renderSignUpField(field, type){

    const { meta: { touched, error } } = field;
    
    return (
      <div>
        <label>{field.label}</label>
        <input
          type="text"
          {...field.input}
        />
        <div>
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
    // Submits values through signUp action
    this.props.signUp(values, (data) => {
      console.log('signUp callback result', data);
      // Callback fn navigates to '/' route
      this.props.history.push('/');
    });
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="email"
          label="Email"
          component={this.renderSignUpField}
          className=""
        />
        <Field
          name="username"
          label="Username"
          component={this.renderSignUpField}
          className=""
        />
        <Field
          name="passsword"
          label="Password"
          component={this.renderSignUpField}
        />
        <Field
          name="confirmPassword"
          label="Confirm Password"
          component={this.renderSignUpField}
        />
        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
    );
  }

}

// Validates Field values
function validate(values){
  const errors = {};
  // Validate the inputs from 'values'
  if ( !values.email ) {
    errors.email = "Enter your email.";
  } else if ( !values.username ) {
    errors.username = "Enter your username.";
  } else if ( !values.password ) {
    errors.password = "Enter a password.";

    // TODO: verify passwrods match

  } else if ( !values.passwordConfirm ) {
    errors.passwordConfirm = "Enter your password again";
  }
  // If errors is empty, the form is fine to submit
  return errors;
}

// Connects reduxForm with validate fn and PostNewForm
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  // Connects createPost fn from actions to PostsNew component props
  connect(null, { signUp })(SignUp)
);
