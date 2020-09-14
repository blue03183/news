import { put, takeEvery, call } from 'redux-saga/effects';

// api 호출
import { getArticles } from '../api/news';
import { handleAction, actionSaga } from '../lib/utils';

// entertainment

// 액션타입 선언
const GET_GENEREL_ARTICLES = 'news/GET_GENEREL_ARTICLES';
const GET_GENEREL_ARTICLES_SUCCESS = 'news/GET_GENEREL_ARTICLES_SUCCESS';
const GET_GENEREL_ARTICLES_ERROR = 'news/GET_GENEREL_ARTICLES_ERROR';
const GET_HEALTH_ARTICLES = 'news/GET_HEALTH_ARTICLES';
const GET_HEALTH_ARTICLES_SUCCESS = 'news/GET_HEALTH_ARTICLES_SUCCESS';
const GET_HEALTH_ARTICLES_ERROR = 'news/GET_HEALTH_ARTICLES_ERROR';
const GET_ENTER_ARTICLES = 'news/GET_ENTER_ARTICLES';
const GET_ENTER_ARTICLES_SUCCESS = 'news/GET_ENTER_ARTICLES_SUCCESS';
const GET_ENTER_ARTICLES_ERROR = 'news/GET_ENTER_ARTICLES_ERROR';


// 액션 생성함수
export const getGeneralArticles = () => ({ type: GET_GENEREL_ARTICLES });
export const getHealthArticles = () => ({ type: GET_HEALTH_ARTICLES });
export const getEnterArticles = () => ({ type: GET_ENTER_ARTICLES });

// 초기상태
const initialState = {
  general: {
    loading: false,
    data: null,
    error: null
  },
  health: {
    loading: false,
    data: null,
    error: null
  },
  entertainment: {
    loading: false,
    data: null,
    error: null
  }
}

// 사가 호출
export function* newsSaga () {
  yield takeEvery(GET_GENEREL_ARTICLES, actionSaga(getArticles, 'general', GET_GENEREL_ARTICLES_SUCCESS, GET_GENEREL_ARTICLES_ERROR));
  yield takeEvery(GET_HEALTH_ARTICLES, actionSaga(getArticles, 'health', GET_HEALTH_ARTICLES_SUCCESS, GET_HEALTH_ARTICLES_ERROR));
  yield takeEvery(GET_ENTER_ARTICLES, actionSaga(getArticles, 'entertainment', GET_ENTER_ARTICLES_SUCCESS, GET_ENTER_ARTICLES_ERROR));
}


function news (state = initialState, action) {
  switch (action.type) {
    case GET_GENEREL_ARTICLES:
    case GET_GENEREL_ARTICLES_SUCCESS:
    case GET_GENEREL_ARTICLES_ERROR:  
      return handleAction(GET_GENEREL_ARTICLES, 'general')(state, action);
    case GET_HEALTH_ARTICLES:
    case GET_HEALTH_ARTICLES_SUCCESS:
    case GET_HEALTH_ARTICLES_ERROR:
      return handleAction(GET_HEALTH_ARTICLES, 'health')(state, action);
    case GET_ENTER_ARTICLES:
    case GET_ENTER_ARTICLES_SUCCESS:
    case GET_ENTER_ARTICLES_ERROR:
      return handleAction(GET_ENTER_ARTICLES, 'entertainment')(state, action);
    default:
      return state;
  }
};

export default news;