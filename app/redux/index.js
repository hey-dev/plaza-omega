import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import reducers from './ducks';

export default apolloClient => {
  const store = createStore(
    combineReducers({
      apollo: apolloClient.reducer(),
      ...reducers,
    }),
    {}, // initial state
    compose(
      applyMiddleware(apolloClient.middleware()),
      // If you are using the devToolsExtension, you can add it here also
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f,
    ),
  );
  return store;
};
