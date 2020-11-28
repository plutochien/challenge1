import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import App from './App';
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
          <App/>
        </Provider>,
    );
  });

  it.skip('should render with given state from Redux store', () => {
    jest.mock('react-beautiful-dnd', () => ({
      Droppable: ({ children }) => children({
        draggableProps: {
          style: {},
        },
        innerRef: jest.fn(),
      }, {}),
      Draggable: ({ children }) => children({
        draggableProps: {
          style: {},
        },
        innerRef: jest.fn(),
      }, {}),
      DragDropContext: ({ children }) => children,
    }));
    expect(component.toJSON()).toMatchSnapshot();
  });
})