import commentReducer from './commentReducer';

describe('comment reducer', () => {
  const initialState = {
    comments: [],
  };
  const mockFetchCommentsStartAction = {
    type: 'FETCH_COMMENTS_START',
  };

  const mockFetchCommentsSuccessAction = {
    type: 'FETCH_COMMENTS_SUCCESS',
    data: [
      {
        postId: 32,
        id: 156,
        name: 'pariatur omnis in',
        email: 'Telly_Lynch@karl.co.uk',
        body: 'dolorum voluptas laborinus dolores magni',
      },
    ],
  };
  const mockFetchCommentsFailAction = {
    type: 'FETCH_COMMENTS_START',
    data: 'network issue',
  };

  it('should generate initial state', () => {
    expect(commentReducer(undefined, {})).toEqual({ comments: [] });
  });

  it('should show comment loading when fetch comment start', () => {
    expect(commentReducer(initialState, mockFetchCommentsStartAction)).toEqual({
      isCommentsLoading: true,
      comments: [],
    });
  });

  it('should show the data after fetch comment successfully ', () => {
    expect(commentReducer(initialState, mockFetchCommentsSuccessAction)).toEqual({
      isCommentsLoading: false,
      comments: [
          {
            postId: 32,
            id: 156,
            name: 'pariatur omnis in',
            email: 'Telly_Lynch@karl.co.uk',
            body: 'dolorum voluptas laborinus dolores magni',
          },
      ],
    });
  });

  it('should show comment loading false when fetch comment failed', () => {
    expect(commentReducer(initialState, mockFetchCommentsFailAction)).toEqual({
      isCommentsLoading: true,
      comments: [],
    });
  });
});
