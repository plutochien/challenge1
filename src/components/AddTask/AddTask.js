import PropTypes from 'prop-types';
import React, { Fragment,useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTask } from '../../actions/todoAction';
import {ADD, ADD_TASK, PRIORITY, PRIORITY_VALUE} from '../../util/constatns';
import { Button, Input, Label, RaidoGroup } from './styles';

const AddTask = ({ addTask }) => {
  const inputRef = useRef(null);
  const [priority, setPriority] = useState(PRIORITY_VALUE.PRIORITY_MEDIUM);
  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmitButton = event => {
    event.preventDefault();
    const taskText = inputRef.current.value.trim();
    if (!taskText) {
      return;
    }
    addTask({ taskText, priority });
    inputRef.current.value = '';
    inputRef.current.focus();
    setPriority(PRIORITY_VALUE.PRIORITY_MEDIUM);
  };

  const handleRadioButton = event => {
    setPriority(event.target.value);
  };

  return (
    <Fragment>
      <Input ref={inputRef} placeholder={ADD_TASK} />
      <RaidoGroup>
        <Input
          name="priority"
          type="radio"
          checked={priority === PRIORITY_VALUE.PRIORITY_URGENT}
          value={PRIORITY_VALUE.PRIORITY_URGENT}
          onChange={handleRadioButton}
        />
        <Label priority={PRIORITY_VALUE.PRIORITY_URGENT}>{PRIORITY.PRIORITY_URGENT}</Label>
        <Input
          name="priority"
          type="radio"
          checked={priority === PRIORITY_VALUE.PRIORITY_MEDIUM}
          value={PRIORITY_VALUE.PRIORITY_MEDIUM}
          onChange={handleRadioButton}
        />
        <Label>{PRIORITY.PRIORITY_MEDIUM}</Label>
        <Input
          name="priority"
          type="radio"
          checked={priority === PRIORITY_VALUE.PRIORITY_LOW}
          value={PRIORITY_VALUE.PRIORITY_LOW}
          onChange={handleRadioButton}
        />
        <Label priority={PRIORITY_VALUE.PRIORITY_LOW}>{PRIORITY.PRIORITY_LOW}</Label>
      </RaidoGroup>
      <Button type="submit" onClick={handleSubmitButton}>
        {ADD}
      </Button>
    </Fragment>
  );
};

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTask,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(AddTask);
