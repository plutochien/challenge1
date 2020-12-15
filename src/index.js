import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import App from './pages/App/App';
import rootReducer from './reducers';
const enhancers = [];
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}
const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(thunk), ...enhancers),
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
