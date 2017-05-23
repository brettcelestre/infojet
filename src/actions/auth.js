import axios from 'axios';


const API_USER = '/api/user/';
const API_ADD_USER = `${API_USER}signup`;


export const CREATE_POST = 'create_post';

export function createPosts(values, callback) {
  const request = axios.post(`${API_ADD_USER}`, values)
    // After API call, invoke callback fn
    .then( () => callback() )

  return {
    type: CREATE_POST,
    payload: request
  }
}













// SIGN-UP
export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
// export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
// export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

export function addUserRequest (user, dispatch) {

  console.log('addUserRequest', user);
  console.log('addUserRequest API_ADD_USER = ', API_ADD_USER);

  return new Promise ((reject, resolve) => {
  //   dispatch(addUser());
    return axios({
      method: 'POST',
      url: API_ADD_USER,
      data: user,
    })
    .then(response => {

      console.log('.then response', response);

      dispatch(addUser(response));
      resolve();

      // if (response.status !== 201) {
      //
      // } else {
      //
      // }
    })
    .catch(response => {
      return 'errorrrrrr'
    });
  });
}
//
export function addUser () {
  console.log('addUser called');
  return {
    type: ADD_USER_REQUEST,
  };
}
//
// function addUserSuccess (user) {
//   return {
//     type: ADD_USER_SUCCESS,
//     payload: user,
//   };
// }
//
// function addUserFailure (user) {
//   return {
//     type: ADD_USER_FAILURE,
//     payload: user,
//   };
// }
