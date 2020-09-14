import { put, call } from 'redux-saga/effects';

export const actionSaga = (api, param, success, error) => {
  return function* saga () {
    try {
      const data = yield call(api, param);    
      
      yield put({
        type: success,
        data: data
      });
    } catch (err) {
      yield put({
        type: error,
        data: err
      });
    }
  };
};

export const handleAction = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: {
            loading: true,
            data: null,
            error: null
          }
        }
      case SUCCESS:
        return {
          ...state,
          [key]: {
            loading: false,
            data: action.data,
            error: null
          }
        }
      case ERROR:
        return {
          ...state,
          [key]: {
            loading: false,
            data: null,
            error: action.error
          }
        }
      default:
        return state;
    }
  }
};