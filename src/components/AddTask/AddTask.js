import PropTypes from 'prop-types';
import React, { useEffect,useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTask } from '../../actions';
import { Button,Input } from './styles';

const AddTask = ({ addTask }) => {
  const inputRef = useRef(null);
  useEffect(() => {
      if(inputRef && inputRef.current){
          inputRef.current.focus();
      }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = inputRef.current.value.trim();
    if (!inputValue) {
      return;
    }
    addTask(inputValue);
    inputRef.current.value = '';
    inputRef.current.focus();
  };


  return (
    <div>
        <Input ref={inputRef} placeholder="add task" />
        <Button type="submit" onClick={handleSubmit}>Add</Button>
    </div>
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
