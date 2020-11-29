import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setFilter } from '../../actions/todoAction';
import { FILTERS, FILTERS_DESC } from '../../util/constatns';
import { Button } from './styles';

const Filters = ({ setFilter }) => {
  const [currentFilter, setCurrentFilter] = useState(FILTERS.SHOW_ALL);
  const handleSetFilter = filter => {
    setFilter(filter);
    setCurrentFilter(filter);
  };
  return (
    <div>
      <Button
        isSelected={currentFilter === FILTERS.SHOW_ALL}
        onClick={() => handleSetFilter(FILTERS.SHOW_ALL)}
      >
        {FILTERS_DESC.SHOW_ALL}
      </Button>
      <Button
        isSelected={currentFilter === FILTERS.SHOW_COMPLETE}
        onClick={() => {
          handleSetFilter(FILTERS.SHOW_COMPLETE);
        }}
      >
        {FILTERS_DESC.SHOW_COMPLETE}
      </Button>
      <Button
        isSelected={currentFilter === FILTERS.SHOW_INCOMPLETE}
        onClick={() => {
          handleSetFilter(FILTERS.SHOW_INCOMPLETE);
        }}
      >
        {FILTERS_DESC.SHOW_INCOMPLETE}
      </Button>
    </div>
  );
};

Filters.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setFilter,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
