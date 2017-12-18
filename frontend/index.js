import { render } from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import swaggerClient from 'redux-swagger-client';
import { App } from './App';
import { rootReducer } from './reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, swaggerClient({ url: '/api/swagger.json' })),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container'),
);
