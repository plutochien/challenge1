import postReducer from './postReducer';

describe('post reducer', () => {
  const initialState = {
    posts: [],
  };
  const mockFetchPostStartAction = {
    type: 'FETCH_POSTS_START',
  };

  const mockFetchPostSuccessAction = {
    type: 'FETCH_POSTS_SUCCESS',
    data: [
      {
        userId: 4,
        id: 31,
        title: 'ullam ut quidem id aut vel consequuntur',
        body: 'debitis eius sed qadipisci repudiandae',
      },
    ],
  };
  const mockFetchPostFailAction = {
    type: 'FETCH_POSTS_START',
    data: 'network issue',
  };

  it('should generate initial state', () => {
    expect(postReducer(undefined, {})).toEqual({ posts: [] });
  });

  it('should show post loading when fetch post start', () => {
    expect(postReducer(initialState, mockFetchPostStartAction)).toEqual({
      isPostLoading: true,
      posts: [],
    });
  });

  it('should show the data after fetch post successfully ', () => {
    expect(postReducer(initialState, mockFetchPostSuccessAction)).toEqual({
      isPostLoading: false,
      posts: [
        {
          userId: 4,
          id: 31,
          title: 'ullam ut quidem id aut vel consequuntur',
          body: 'debitis eius sed qadipisci repudiandae',
        },
      ],
    });
  });

  it('should show post loading false when fetch post failed', () => {
    expect(postReducer(initialState, mockFetchPostFailAction)).toEqual({
      isPostLoading: true,
      posts: [],
    });
  });
});
