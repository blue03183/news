import React from 'react';
import TabScreen from './Components/TabScreen'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from './modules';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

export default function App() {

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <TabScreen />
    </Provider>    
  );
}

