import * as actions from './commentAction';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');
describe('post actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      commentsReducer: {
        comments: [
          {
            postId: 32,
            id: 156,
            name: 'pariatur omnis in',
            email: 'Telly_Lynch@karl.co.uk',
            body: 'dolorum voluptas laborinus dolores magni',
          },
        ],
        isCommentsLoading: false,
        currentPostId: 31,
      },
    });
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should dispatch actions of FETCH_COMMENTS_START', () => {
    const mockedData = [
      {
        postId: 32,
        id: 156,
        name: 'pariatur omnis in',
        email: 'Telly_Lynch@karl.co.uk',
        body: 'dolorum voluptas laborinus dolores magni',
      },
    ];

    axios.get = jest.fn().mockResolvedValue(mockedData);
    const expectedActions = [
      {
        type: 'FETCH_COMMENTS_START',
      },
    ];

    store.dispatch(actions.fetchComments(32));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
