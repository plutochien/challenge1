import * as actions from './userAction';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');
describe('user actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      usersReducer: {
        users: [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
              name: 'Romaguera-Crona',
              catchPhrase: 'Multi-layered client-server neural-net',
              bs: 'harness real-time e-markets',
            },
          },
        ],
        isUserLoading: false,
      },
    });
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should dispatch actions of FETCH_USER_START', () => {
    const mockedData = [{
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      company: {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications',
      },
    }];
    axios.get = jest.fn().mockResolvedValue(mockedData);
    const expectedActions = [
      {
        type: 'FETCH_USERS_START',
      },
    ];

    store.dispatch(actions.fetchUsers());

    expect(store.getActions()).toEqual(expectedActions);
  });

})

