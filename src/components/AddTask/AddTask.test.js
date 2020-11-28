import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import AddTask from './AddTask';
const mockStore = configureStore([]);

describe('AddTask Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      todos: {
        list: [
          {
            id: 7,
            taskText: 'task1',
            isComplete: true,
          },
          {
            id: 6,
            taskText: 'task2',
            isComplete: false,
          },
          {
            id: 1,
            taskText: 'task3',
            isComplete: true,
          },
        ],
      },
      filter: 'SHOW_ALL',
    });
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <AddTask />
      </Provider>,
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  // it('should dispatch an action on click Add task button', () => {
  //   renderer.act(() => {
  //     component.root.findByType('button').props.onClick();
  //   });
  //   expect(store.dispatch).toHaveBeenCalledTimes(2);
  // });
});
