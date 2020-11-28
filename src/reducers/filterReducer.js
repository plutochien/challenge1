import {SET_FILTER} from "../actions/actionTypes";
import { FILTERS } from '../util/constatns';

const filterReducer = (state = FILTERS.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.data;
    default:
      return state;
  }
};

export default filterReducer;
