import { combineReducers } from 'redux';

import usersReducer from './userReducer';
import postReducer from './postReducer';
import commentReduer from './commentReducer';

export default combineReducers({
  usersReducer: usersReducer,
  postsReducer: postReducer,
  commentsReducer: commentReduer,
});
