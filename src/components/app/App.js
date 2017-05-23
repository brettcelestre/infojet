import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import signUp from '../../actions/index';
import Login from '../login/Login';
import SignUp from '../signup/SignUp';

class App extends Component {

  componentDidMount(){
    console.log('app APPp');
    // this.props.signUp();
    console.log('please work ', this.props);
  }

  render() {

    console.log('render hi');

    return (
      <div className="App">

        <div className="App-header">
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


// function mapStateToProps(state) {
//   return { signUp: state.signUp };
// }
//
// export default connect(mapStateToProps, { signUp })(App);
