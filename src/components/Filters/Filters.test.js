import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Filters from './Filters';
const mockStore = configureStore([]);

describe('Filters Component', () => {
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
                <Filters setFilter={jest.fn}/>
            </Provider>,
        );

    });

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should dispatch an action on click All button', () => {
        renderer.act(() => {
        component.root.findAllByType('button')[0].props.onClick();
      });
      expect(store.dispatch).toHaveBeenCalledTimes(1);
    });

    it('should dispatch an action on click Complete button', () => {
        renderer.act(() => {
            component.root.findAllByType('button')[1].props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });

    it('should dispatch an action on click Incomplete button', () => {
        renderer.act(() => {
            component.root.findAllByType('button')[2].props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});
