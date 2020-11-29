import { sortBy } from 'lodash';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchLocalData, toggleComplete } from '../../actions/todoAction';
import { FILTERS } from '../../util/constatns';
import Task from '../Task/Task';

const TodoList = ({ list, fetchLocalData, toggleComplete }) => {
  useEffect(() => {
    fetchLocalData();
  }, [fetchLocalData]);

  return (
    <Fragment>
      {list.map((task, index) => (
        <Task
          key={task.id}
          data={{ ...task, order: index + 1 }}
          toggleComplete={() => {
            toggleComplete(task.id);
          }}
        />
      ))}
    </Fragment>
  );
};

TodoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isComplete: PropTypes.bool.isRequired,
      taskText: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  fetchLocalData: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

const filterList = (list, filter) => {
  switch (filter) {
    case FILTERS.SHOW_ALL:
      return sortByPriority(list);
    case FILTERS.SHOW_INCOMPLETE:
      return sortByPriority(list.filter(todo => !todo.isComplete));
    case FILTERS.SHOW_COMPLETE:
      return sortByPriority(list.filter(todo => todo.isComplete));
    default:
      return sortByPriority(list);
  }
};

const sortByPriority = (list) => {
  return sortBy(list, ['priority', 'taskText']);
}

const mapStateToProps = ({ todos, filter }) => ({
  list: filterList(todos.list, filter),
});

const mapDispatchToProps = dispatch => ({
  toggleComplete: id => dispatch(toggleComplete(id)),
  fetchLocalData: () => dispatch(fetchLocalData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
