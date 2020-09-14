import { combineReducers } from 'redux';
import news, { newsSaga } from './news';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  news
});

export function* rootSaga () {
  yield all([
    newsSaga()
  ]);
};

export default rootReducer;