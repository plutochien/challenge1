import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';

import { fetchLocalData, reorderTasks, toggleComplete } from '../../actions';
import { FILTERS } from '../../util/constatns';
import Task from '../Task/Task';

const handleDragEnd = (todoList, reorderTasks) => ({ source, destination }) => {
  if (!destination || source.index === destination.index) {
    return;
  }
  const { index: from } = source;
  const { index: to } = destination;
  reorderTasks(moveList({ todoList, from, to }));
};

const moveList = ({ todoList, from, to }) => {
  const movedList = [...todoList];
  const deletedItem = movedList.splice(from, 1)[0];
  movedList.splice(to, 0, deletedItem);
  return movedList;
};

const TodoList = ({ todos, fetchLocalData, toggleComplete, reorderTasks }) => {
  useEffect(() => {
    fetchLocalData();
  }, [fetchLocalData]);

  if (todos && todos.length === 0) {
    return null;
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd(todos, reorderTasks)}>
      <Droppable droppableId="droppable">
        {provided => (
          <div ref={provided.innerRef}>
            {todos.map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Task
                      key={todo.id}
                      data={{ ...todo, order: index + 1 }}
                      toggleComplete={() => {
                        toggleComplete(todo.id);
                      }}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isComplete: PropTypes.bool.isRequired,
      taskText: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  fetchLocalData: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  reorderTasks: PropTypes.func.isRequired,
};

const filterTodo = (todos, filter) => {
  switch (filter) {
    case FILTERS.SHOW_ALL:
      return todos;
    case FILTERS.SHOW_INCOMPLETE:
      return todos.filter(todo => todo.isComplete);
    case FILTERS.SHOW_COMPLETE:
      return todos.filter(todo => !todo.isComplete);
    default:
      return todos;
  }
};

const mapStateToProps = ({todos, filter}) => ({
  todos: filterTodo(todos.list, filter),
});

const mapDispatchToProps = dispatch => ({
  toggleComplete: id => dispatch(toggleComplete(id)),
  reorderTasks: data => dispatch(reorderTasks(data)),
  fetchLocalData: () => dispatch(fetchLocalData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
