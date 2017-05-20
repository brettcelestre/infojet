import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'Username',
      password: 'Password'
    };
  }

  createAccount(){
    console.log('worked', this.state.username);
  }

  render() {
    return (
      <div>
        Login Section
        <br />

        {/* <form onSubmit={this.props.handleSubmit(this.createAccount.bind(this))}> */}
          First name:
          <input type="text" name="firstname" placeholder={this.state.username} />
          <br />
          Last name:
          <input type="text" name="lastname" placeholder={this.state.password} />
          <br />
          <input type="submit" value="Submit" />
        {/* </form> */}

      </div>
    );
  }

}

export default Login;
