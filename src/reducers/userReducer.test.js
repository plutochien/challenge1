import usersReducer from './userReducer';

describe('user reducer', () => {
  const initialState = {
    users: [],
  };
  const mockFetchUserStartAction = {
    type: 'FETCH_USERS_START',
  };

  const mockFetchUserSuccessAction = {
    type: 'FETCH_USERS_SUCCESS',
    data: [
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
  };
  const mockFetchUserFailAction = {
    type: 'FETCH_USERS_START',
    data: 'network issue',
  };

  it('should generate initial state', () => {
    expect(usersReducer(undefined, {})).toEqual({ users: [] });
  });

  it('should show user loading when fetch user start', () => {
    expect(usersReducer(initialState, mockFetchUserStartAction)).toEqual({
      isUserLoading: true,
      users: [],
    });
  });

  it('should show the data after fetch user successfully ', () => {
    expect(usersReducer(initialState, mockFetchUserSuccessAction)).toEqual({
      isUserLoading: false,
      users: [
        {
          company: {
            bs: 'harness real-time e-markets',
            catchPhrase: 'Multi-layered client-server neural-net',
            name: 'Romaguera-Crona',
          },
          email: 'Sincere@april.biz',
          id: 1,
          name: 'Leanne Graham',
          phone: '1-770-736-8031 x56442',
          username: 'Bret',
          website: 'hildegard.org',
        },
      ],
    });
  });

  it('should show user loading false when fetch user failed', () => {
    expect(usersReducer(initialState, mockFetchUserFailAction)).toEqual({
      isUserLoading: true,
      users: [],
    });
  });
});
