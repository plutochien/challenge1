import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import UserPost from "./UserPost";
const mockStore = configureStore([]);

describe('UserPost Component', () => {
  let store;
  let component;
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
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <UserPost userId={1} />
      </Provider>,
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
