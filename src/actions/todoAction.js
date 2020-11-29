import {
  ADD_TASK,
  DELETE_TASK,
  RESET_TASKS,
  SET_FILTER,
  TOGGLE_COMPLETE,
} from './actionTypes';

const generateId = list => {
  if (list.length) {
    const idList = list.map(item => item.id);
    return Math.max(...idList) + 1;
  }
  return 1;
};

export const fetchLocalData = () => {
  return dispatch => {
    if (!window.localStorage.todoList) {
      return;
    }
    dispatch({
      type: RESET_TASKS,
      data: JSON.parse(localStorage.todoList),
    });
  };
};

const savedData = () => {
  return (dispatch, getState) => {
    if (window.localStorage) {
      window.localStorage.setItem(
        'todoList',
        JSON.stringify(getState().todos.list),
      );
    }
    return;
  };
};

export const addTask = ({ taskText, priority }) => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_TASK,
      data: {
        id: generateId(getState().todos.list),
        taskText: taskText,
        isComplete: false,
        priority: priority,
      },
    });

    dispatch(savedData());
  };
};
export const deleteTask = id => {
  return dispatch => {
    dispatch({ type: DELETE_TASK, data: id });
    dispatch(savedData());
  };
};

export const toggleComplete = id => {
  return dispatch => {
    dispatch({ type: TOGGLE_COMPLETE, data: id });
    dispatch(savedData());
  };
};

export const setFilter = filter => {
  return dispatch => {
    dispatch({ type: SET_FILTER, data: filter });
  };
};
