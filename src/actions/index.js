import axios from 'axios';

const ROOT_URL = '/api/user';

export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';

export function signUp(values, callback) {
  const request = axios.post(`${ROOT_URL}/signup`, values);
    // .then( (data) => callback(data) )

  return {
    type: ADD_USER_REQUEST,
    payload: request
  }

}


// TEST
export const CURRENT_USER_REQUEST = 'CURRENT_USER_REQUEST';

export function currentUser(value, callback) {
  const request = axios.get(`${ROOT_URL}/signup`)

  return {
    type: CURRENT_USER_REQUEST,
    payload: request
  }

}
