import axios from 'axios';
import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
} from './actionTypes';

const FETCH_USER_URL = 'http://jsonplaceholder.typicode.com/users';

const fetchUsersStart = dispatch => {
  dispatch({
    type: FETCH_USERS_START,
  });
};
const fetchUsersSuccess = (dispatch, data) => {
  dispatch({
    type: FETCH_USERS_SUCCESS,
    data: data,
  });
};

const fetchUsersFail = (dispatch, data) => {
  dispatch({
    type: FETCH_USERS_FAIL,
    data: data,
  });
};

export const fetchUsers = () => {
  return dispatch => {
    fetchUsersStart(dispatch);
    axios
      .get(FETCH_USER_URL)
      .then(response => {
        fetchUsersSuccess(dispatch, response.data);
      })
      .catch(error => {
        fetchUsersFail(dispatch, error);
      });
  };
};
