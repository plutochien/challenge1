import * as actions from './postAction';
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
      postsReducer: {
        posts: [
          {
            userId: 4,
            id: 31,
            title: 'ullam ut quidem id aut vel consequuntur',
            body: 'debitis eius sed qadipisci repudiandae',
          },
        ],
        isPostLoading: false,
      },
    });
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should dispatch actions of FETCH_POST_START', () => {
    const mockedData = [
      {
        userId: 4,
        id: 31,
        title: 'ullam ut quidem id aut vel consequuntur',
        body: 'debitis eius sed qadipisci repudiandae',
      },
    ];

    axios.get = jest.fn().mockResolvedValue(mockedData);
    const expectedActions = [
      {
        type: 'FETCH_POSTS_START',
      },
    ];

    store.dispatch(actions.fetchPosts(31));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
