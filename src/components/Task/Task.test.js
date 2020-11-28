import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Task from './Task';
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
    const mockData = {
      id: 1,
      order: 2,
      taskText: 'test task',
      isComplete: false,
    };
    component = renderer.create(
      <Provider store={store}>
        <Task data={mockData} toggleComplete={jest.fn} deleteTask={jest.fn} />
      </Provider>,
    );
  });

  it('should render with given state from Redux store', () => {
    const mockData = {
      id: 1,
      order: 2,
      taskText: 'test task',
      isComplete: true,
    };
    component = renderer.create(
      <Provider store={store}>
        <Task data={mockData} toggleComplete={jest.fn} deleteTask={jest.fn} />
      </Provider>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on click Done button', () => {
    renderer.act(() => {
      component.root.findAllByType('button')[0].props.onClick();
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('should dispatch an action on click Delete button', () => {
    renderer.act(() => {
      component.root.findAllByType('button')[1].props.onClick();
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
