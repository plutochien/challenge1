import axios from 'axios';
import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAIL,
} from './actionTypes';

const FETCH_POST_URL = 'http://jsonplaceholder.typicode.com/posts?';

const fetchPostsStart = dispatch => {
  dispatch({
    type: FETCH_POSTS_START,
  });
};
const fetchPostsSuccess = (dispatch, data) => {
  dispatch({
    type: FETCH_POSTS_SUCCESS,
    data: data,
  });
};

const fetchPostsFail = (dispatch, data) => {
  dispatch({
    type: FETCH_POSTS_FAIL,
    data: data,
  });
};

export const fetchPosts = id => {
  return dispatch => {
    fetchPostsStart(dispatch);
    axios
      .get(`${FETCH_POST_URL}userId=${id}`)
      .then(response => {
        fetchPostsSuccess(dispatch, response.data);
      })
      .catch(error => {
        fetchPostsFail(dispatch, error);
      });
  };
};
