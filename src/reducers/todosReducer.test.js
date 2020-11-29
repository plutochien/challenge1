import todosReducer from './todosReducer';

describe('todosReducer reducer', () => {
  const initialState = {
    list: [],
  };
  const mockAddTaskAction = {
    type: 'ADD_TASK',
    data: {
      id: 9,
      text: 'watch TV',
      priority: '1',
    },
  };

  const mockToggleComplete = {
    type: 'TOGGLE_COMPLETE',
    data: 1,
  };

  const mockDeleteTask = {
    type: 'DELETE_TASK',
    data: 1,
  };

  const mockRestTasks = {
    type: 'RESET_TASKS',
    data: [{"id": 1, "taskText": "aaa", "isComplete": false, "priority": "1"}]
  }


  const mockState = {
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
        isComplete: false,
        priority: '2',
      },
    ],
  };

  it('should generate initial state', () => {
    expect(todosReducer(undefined, {})).toEqual({ list: [] });
  });

  it('should add task when in initial state', () => {
    expect(todosReducer(initialState, mockAddTaskAction)).toEqual({
      list: [
        {
          id: 9,
          text: 'watch TV',
          priority: '1',
        },
      ],
    });
  });

  it('should add task when in existing list state', () => {
    expect(todosReducer(mockState, mockAddTaskAction)).toEqual({
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
          isComplete: false,
          priority: '2',
        },
        {
          id: 9,
          text: 'watch TV',
          priority: '1',
        },
      ],
    });
  });

  it('should show isComplete to true when toggle complete', () => {
    expect(todosReducer(mockState, mockToggleComplete)).toEqual({
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
        }
      ],
    });
  });

  it('should show isComplete to false when toggle complete', () => {
    const mockState = {
      list: [
        {
          id: 1,
          taskText: 'task3',
          isComplete: true,
          priority: '2',
        }
      ],
    }
    expect(todosReducer(mockState, mockToggleComplete)).toEqual({
      list: [
        {
          id: 1,
          taskText: 'task3',
          isComplete: false,
          priority: '2',
        }
      ],
    });
  });

  it('should delete task when run delete task', () => {
    expect(todosReducer(mockState, mockDeleteTask)).toEqual({
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
      ],
    });
  });

  it('should display task when run rest task', () => {
    expect(todosReducer(initialState, mockRestTasks)).toEqual({
      list: [
        {
          "id": 1,
          "isComplete": false,
          "priority": "1",
          "taskText": "aaa"
        }]
    });
  });

});
