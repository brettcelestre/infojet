import React from 'react';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';

import Login from './Login';

it('renders Login without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
});
