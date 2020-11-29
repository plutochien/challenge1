import * as actions from './todoAction';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      todos: {
        list: [
          {
            id: 7,
            taskText: 'task1',
            isComplete: true,
            priority: '0',
          },
          {
            id: 6,
            taskText: 'task2',
            isComplete: false,
            priority: '1',
          },
          {
            id: 1,
            taskText: 'task3',
            isComplete: true,
            priority: '2',
          },
        ],
      },
      filter: 'SHOW_ALL',
    });
  });
  it('should dispatch actions of ADD_TASK', () => {
    const expectedActions = [
      {
        data: {
          id: 8,
          isComplete: false,
        },
        type: 'ADD_TASK',
      },
    ];

    store.dispatch(actions.addTask('add task 1', '0'));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch actions of DELETE_TASK', () => {
    const expectedActions = [
      {
        data: 7,
        type: 'DELETE_TASK',
      },
    ];

    store.dispatch(actions.deleteTask(7));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch actions of TOGGLE_COMPLETE', () => {
    const expectedActions = [
      {
        data: 7,
        type: 'TOGGLE_COMPLETE',
      },
    ];

    store.dispatch(actions.toggleComplete(7));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch actions of RESET_TASKS', () => {
    const expectedActions = [
      {
        "data": [
          {
            "id": 7,
            "isComplete": true,
            "priority": "0",
            "taskText": "task1"
          },
          {
            "id": 6,
            "isComplete": false,
            "priority": "1",
            "taskText": "task2"
          },
          {
            "id": 1,
            "isComplete": true,
            "priority": "2",
            "taskText": "task3"
          }
        ],
        "type": "RESET_TASKS"
      }
    ]
    store.dispatch(actions.fetchLocalData());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch actions of SET_FILTER', () => {
    const expectedActions = [
      {
        data: "ALL",
        type: 'SET_FILTER',
      },
    ];

    store.dispatch(actions.setFilter("ALL"));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
