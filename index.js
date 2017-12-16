import { render } from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import swaggerClient from 'redux-swagger-client';
import App from './components/App';
import { rootReducer } from './reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunk,
    clientMiddleware(null),
    swaggerClient({ url: 'http://localhost:5000/api/swagger.json' }),
  ),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container'),
);

export default function clientMiddleware(client) {
  return ({ dispatch, getState }) => next => action => {
    if (!action) {
      return action;
    }

    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    const { promise, types, ...rest } = action;

    if (!promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;

    next({ ...rest, type: REQUEST });

    return promise(client)
      .then(
        result => next({ ...rest, result, type: SUCCESS }),
        error => next({ ...rest, error, type: FAILURE }),
      )
      .catch(error => {
        next({ ...rest, error, type: FAILURE });
      });
  };
}
