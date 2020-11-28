import {
  ADD_TASK,
  DELETE_TASK,
  RESET_TASKS,
  SET_FILTER,
  TOGGLE_COMPLETE,
} from './actionTypes';

const generateID = list => {
  if (list.length) {
    return (
      Math.max.apply(
        Math,
        list.map(item => item.id),
      ) + 1
    );
  }
  return 1;
};
export const fetchLocalData = () => {
  return (dispatch, getState) => {
    if(!localStorage.todoList){
      return
    }
    dispatch({
      type: RESET_TASKS,
      data: JSON.parse(localStorage.todoList),
    });
  };
};

const savedData = () => {
  return (dispatch, getState) => {
    localStorage.setItem('todoList', JSON.stringify(getState().todos.list));
  };
};

export const addTask = taskText => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_TASK,
      data: {
        id: generateID(getState().todos.list),
        taskText,
        isComplete: false,
      },
    });

    dispatch(savedData());
  };
};
export const deleteTask = id => {
  return (dispatch, getState) => {
    dispatch({ type: DELETE_TASK, data: id });
    dispatch(savedData());
  };
};

export const reorderTasks = data => {
  return (dispatch, getState) => {
    dispatch({ type: RESET_TASKS, data });
    dispatch(savedData());
  };
};

export const toggleComplete = id => ({
  type: TOGGLE_COMPLETE,
  id,
});

export const setFilter = filter => {
  return dispatch => {
    dispatch({ type: SET_FILTER, data: filter });
  };
};
