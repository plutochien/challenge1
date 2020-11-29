import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import App from './App';
const mockStore = configureStore([]);

describe('App Component', () => {
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
            priority: '0'
          },
          {
            id: 6,
            taskText: 'task2',
            isComplete: false,
            priority: '1'
          },
          {
            id: 1,
            taskText: 'task3',
            isComplete: true,
            priority: '2'
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

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
})