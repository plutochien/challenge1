import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAIL,
} from '../actions/actionTypes';

const initialState = {
  posts: [],
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START:
      return {
        ...state,
        isPostLoading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.data,
        isPostLoading: false,
      };
    case FETCH_POSTS_FAIL:
      return { ...state, error: action.data, isPostLoading: false };
    default:
      return state;
  }
};

export default postReducer;
