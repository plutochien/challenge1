import filterReducer from './filterReducer';

describe('todosReducer reducer', () => {
  const initialState = {
    filter: 'SHOW_ALL',
  };
  const mockSetFilterALLAction = {
    type: 'SET_FILTER',
    data: 'SHOW_ALL',
  };
  const mockSetFilterCompleteAction = {
    type: 'SET_FILTER',
    data: 'SHOW_COMPLETE',
  };
  const mockSetFilterIncompleteAction = {
    type: 'SET_FILTER',
    data: 'SHOW_INCOMPLETE',
  };
  it('should generate initial state', () => {
    expect(filterReducer(undefined, {})).toEqual('SHOW_ALL');
  });

  it('should get SHOW_ALL when dispatch show all filter', () => {
    expect(filterReducer(initialState, mockSetFilterALLAction)).toEqual(
      'SHOW_ALL',
    );
  });

  it('should get SHOW_COMPLETE when dispatch show complete filter', () => {
    expect(filterReducer(initialState, mockSetFilterCompleteAction)).toEqual(
      'SHOW_COMPLETE');
  });

  it('should get SHOW_INCOMPLETE when dispatch show incomplete filter', () => {
    expect(filterReducer(initialState, mockSetFilterIncompleteAction)).toEqual(
      'SHOW_INCOMPLETE',
    );
  });
});
