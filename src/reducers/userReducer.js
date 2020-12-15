import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
} from '../actions/actionTypes';

const initialState = {
  users: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        isUserLoading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.data,
        isUserLoading: false,
      };
    case FETCH_USERS_FAIL:
      return { ...state, error: action.data, isUserLoading: false };
    default:
      return state;
  }
};

export default usersReducer;
