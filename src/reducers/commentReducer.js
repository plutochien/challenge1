import {
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
} from '../actions/actionTypes';

const initialState = {
  comments: [],
};
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_START:
      return {
        ...state,
        isCommentsLoading: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.data,
        currentPostId: action.currentPostId,
        isCommentsLoading: false,
      };
    case FETCH_COMMENTS_FAIL:
      return { ...state, error: action.data, isCommentsLoading: false };
    default:
      return state;
  }
};

export default commentReducer;
