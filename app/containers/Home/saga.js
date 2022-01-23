import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import auth from 'utils/auth';
import * as constants from './constants';

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(constants.GET_INFO_HOME_INIT, getHomeInfoSaga);
}

export function* getHomeInfoSaga(actions) {
  try {
    const requestURL = `http://ec2-18-217-168-29.us-east-2.compute.amazonaws.com/adaimpacto/api/v1/dashboard/clients/all/home`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'x-access-token': auth.getToken(),
        Accept: 'application/json',
        'start-filter-date': actions.initDate,
        'end-filter-date': actions.finalDate,
      },
    });
    if (response) {
      yield put({
        type: constants.GET_INFO_HOME_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_INFO_HOME_FAILED,
      error,
    });
  }
}
