import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteTask, toggleComplete } from '../../actions';
import { Badge, Button, DeleteButton, Order, Row, Text } from './styles';

const Task = ({
  data: { id, isComplete, taskText, order, priority },
  deleteTask,
  toggleComplete,
}) => {
  return (
    <div>
      <Row>
        <Order priority={priority}>{order} </Order>
        <Text isComplete={isComplete} priority={priority}>
          {taskText}
          {isComplete ? <Badge>Done</Badge> : ''}
        </Text>

        <Button
          isComplete={isComplete}
          size="40"
          onClick={() => {
            toggleComplete(id);
          }}
        >
          {isComplete ? 'Undone' : 'Done'}
        </Button>
        <DeleteButton
          size="40"
          onClick={() => {
            deleteTask(id);
          }}
        >
          Delete
        </DeleteButton>
      </Row>
    </div>
  );
};

Task.propTypes = {
  data: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteTask,
      toggleComplete,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(Task);
