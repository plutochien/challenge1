import axios from 'axios';
import {
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
} from './actionTypes';

const FETCH_COMMENT_URL = 'https://jsonplaceholder.typicode.com/comments?';

const fetchCommentsStart = dispatch => {
  dispatch({
    type: FETCH_COMMENTS_START,
  });
};
const fetchCommentsSuccess = (dispatch, data, currentPostId) => {
  dispatch({
    type: FETCH_COMMENTS_SUCCESS,
    data: data,
    currentPostId,
  });
};

const fetchCommentsFail = (dispatch, data) => {
  dispatch({
    type: FETCH_COMMENTS_FAIL,
    data: data,
  });
};

export const fetchComments = id => {
  return dispatch => {
    fetchCommentsStart(dispatch);
    axios
      .get(`${FETCH_COMMENT_URL}postId=${id}`)
      .then(response => {
        fetchCommentsSuccess(dispatch, response.data, id);
      })
      .catch(error => {
        fetchCommentsFail(dispatch, error);
      });
  };
};
