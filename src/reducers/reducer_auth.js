import _ from 'lodash';
import {
  ADD_USER_REQUEST,
  CURRENT_USER_REQUEST } from '../actions';

export default function(state = {}, action) {
  switch( action.type ) {

    case ADD_USER_REQUEST:
      // console.log('reducer_auth - state BEORE:', state);
      state['userData'] = action.payload;

      console.log('reducer_auth - action.payload', action.payload);
      console.log('reducer_auth - state AFTER', state);
      return state;

    case CURRENT_USER_REQUEST:
      console.log('CURRENT_USER_REQUEST - state BEORE:', state);
      state['userData'] = action.payload;

      console.log('CURRENT_USER_REQUEST - action.payload', action.payload);
      console.log('CURRENT_USER_REQUEST - state AFTER', state);
      return state;

    default:
      return state;
  }
}
