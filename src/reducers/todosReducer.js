import {
  ADD_TASK,
  DELETE_TASK,
  RESET_TASKS,
  TOGGLE_COMPLETE,
} from '../actions/actionTypes';

const initialState = {
  list: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        list: state.list.concat(action.data),
      };
    case DELETE_TASK:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.data),
      };
    case TOGGLE_COMPLETE: {
      const itemIndex = state.list.findIndex(item => item.id === action.id);
      return {
        ...state,
        list: state.list.map((item, index) => {
          if (index !== itemIndex) {
            return item;
          }
          return {
            ...item,
            isComplete: !item.isComplete,
          };
        }),
      };
    }
    case RESET_TASKS:
      return {
        ...state,
        list: action.data,
      };

    default:
      return state;
  }
};

export default todosReducer;
