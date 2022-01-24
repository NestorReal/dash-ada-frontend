import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import auth from 'utils/auth';
import * as constants from './constants';

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(constants.GET_CLIENTS_ALL_INIT, getClientsAllSaga);
  yield takeLatest(constants.GET_CLIENTS_DATE_INIT, getClientsAllByDateSaga);
  yield takeLatest(constants.GET_INFO_HOME_INIT, getHomeInfoSaga);
  yield takeLatest(constants.GET_CLIENTS_MICROWD_INIT, getClientsMicrowdSaga);
  yield takeLatest(
    constants.GET_CLIENTS_MICROWD_ID_INIT,
    getClientsMicrowdIdSaga,
  );
  yield takeLatest(
    constants.GET_CLIENTS_MICROWD_DATE_INIT,
    getClientsMicrowdByDateSaga,
  );
  yield takeLatest(
    constants.GET_INFO_HOME_MICROWD_INIT,
    getInfoHomeMicrowdSaga,
  );
  yield takeLatest(
    constants.GET_CLIENTS_PROGRESEMOS_INIT,
    getClientsProgresemosSaga,
  );
  yield takeLatest(
    constants.GET_CLIENTS_PROGRESEMOS_ID_INIT,
    getClientsProgresemosIdSaga,
  );
  yield takeLatest(
    constants.GET_CLIENTS_PROGRESEMOS_DATE_INIT,
    getClientsProgresemosByDateSaga,
  );
  yield takeLatest(
    constants.GET_INFO_HOME_PROGRESEMOS_INIT,
    getInfoHomeProgresemosSaga,
  );
  yield takeLatest(constants.GET_MENTORS_INIT, getMentorsSaga);
  yield takeLatest(constants.GET_USERS_INIT, getUsersSaga);
  yield takeLatest(constants.GET_NOTIFICATIONS_INIT, getNotificationsSaga);
  yield takeLatest(constants.GET_VIDEOS_INIT, getVideosSaga);
  yield takeLatest(constants.GET_COURSES_INIT, getCoursesSaga);
}

export function* getClientsAllSaga() {
  try {
    const requestURL = `http://ec2-18-217-168-29.us-east-2.compute.amazonaws.com/adaimpacto/api/v1/dashboard/clients/all`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'x-access-token': auth.getToken(),
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_CLIENTS_ALL_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_CLIENTS_ALL_FAILED,
      error,
    });
  }
}

export function* getClientsAllByDateSaga(actions) {
  try {
    const requestURL = `http://ec2-18-217-168-29.us-east-2.compute.amazonaws.com/adaimpacto/api/v1/dashboard/clients/all/date`;
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
        type: constants.GET_CLIENTS_DATE_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_CLIENTS_DATE_FAILED,
      error,
    });
  }
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

export function* getClientsMicrowdSaga() {
  try {
    const requestURL = `http://ec2-18-217-168-29.us-east-2.compute.amazonaws.com/adaimpacto/api/v1/dashboard/clients/microwd`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'x-access-token': auth.getToken(),
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_CLIENTS_MICROWD_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_CLIENTS_MICROWD_FAILED,
      error,
    });
  }
}

export function* getClientsMicrowdIdSaga(action) {
  try {
    const requestURL = `http://ec2-18-217-168-29.us-east-2.compute.amazonaws.com/adaimpacto/api/v1/dashboard/clients/microwd/${
      action.id
    }`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'x-access-token': auth.getToken(),
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_CLIENTS_MICROWD_ID_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_CLIENTS_MICROWD_ID_FAILED,
      error,
    });
  }
}

export function* getClientsMicrowdByDateSaga(actions) {
  try {
    const requestURL = `http://ec2-18-217-168-29.us-east-2.compute.amazonaws.com/adaimpacto/api/v1/dashboard/clients/microwd/date`;
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
        type: constants.GET_CLIENTS_MICROWD_DATE_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_CLIENTS_MICROWD_DATE_FAILED,
      error,
    });
  }
}

export function* getInfoHomeMicrowdSaga(actions) {
  try {
    const requestURL = `http://ec2-18-217-168-29.us-east-2.compute.amazonaws.com/adaimpacto/api/v1/dashboard/clients/microwd/home`;
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
        type: constants.GET_INFO_HOME_MICROWD_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_INFO_HOME_MICROWD_FAILED,
      error,
    });
  }
}

export function* getClientsProgresemosSaga() {
  try {
    const requestURL = `http://ec2-18-217-168-29.us-east-2.compute.amazonaws.com/adaimpacto/api/v1/dashboard/clients/progresemos`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'x-access-token': auth.getToken(),
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_CLIENTS_PROGRESEMOS_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_CLIENTS_PROGRESEMOS_FAILED,
      error,
    });
  }
}

export function* getClientsProgresemosIdSaga(action) {
  try {
    const requestURL = `http://ec2-18-217-168-29.us-east-2.compute.amazonaws.com/adaimpacto/api/v1/dashboard/clients/progresemos/${
      action.id
    }`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'x-access-token': auth.getToken(),
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_CLIENTS_PROGRESEMOS_ID_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_CLIENTS_PROGRESEMOS_ID_FAILED,
      error,
    });
  }
}

export function* getClientsProgresemosByDateSaga(actions) {
  try {
    const requestURL = `http://ec2-18-217-168-29.us-east-2.compute.amazonaws.com/adaimpacto/api/v1/dashboard/clients/progresemos/date`;
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
        type: constants.GET_CLIENTS_PROGRESEMOS_DATE_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_CLIENTS_PROGRESEMOS_DATE_FAILED,
      error,
    });
  }
}

export function* getInfoHomeProgresemosSaga(actions) {
  try {
    const requestURL = `http://ec2-18-217-168-29.us-east-2.compute.amazonaws.com/adaimpacto/api/v1/dashboard/clients/microwd/home`;
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
        type: constants.GET_INFO_HOME_PROGRESEMOS_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_INFO_HOME_PROGRESEMOS_FAILED,
      error,
    });
  }
}

export function* getMentorsSaga() {
  try {
    const requestURL = `http://ec2-18-217-168-29.us-east-2.compute.amazonaws.com/adaimpacto/api/v1/dashboard/user/mentors`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'x-access-token': auth.getToken(),
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_MENTORS_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_MENTORS_FAILED,
      error,
    });
  }
}

export function* getUsersSaga() {
  try {
    const requestURL = `http://ec2-18-217-168-29.us-east-2.compute.amazonaws.com/adaimpacto/api/v1/dashboard/user`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'x-access-token': auth.getToken(),
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_USERS_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_USERS_FAILED,
      error,
    });
  }
}

export function* getNotificationsSaga() {
  try {
    const requestURL = `http://ec2-18-217-168-29.us-east-2.compute.amazonaws.com/adaimpacto/api/v1/dashboard/notification`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'x-access-token': auth.getToken(),
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_NOTIFICATIONS_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_NOTIFICATIONS_FAILED,
      error,
    });
  }
}

export function* getVideosSaga() {
  try {
    const requestURL = `http://ec2-18-217-168-29.us-east-2.compute.amazonaws.com/adaimpacto/api/v1/dashboard/videos`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'x-access-token': auth.getToken(),
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_VIDEOS_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_VIDEOS_FAILED,
      error,
    });
  }
}

export function* getCoursesSaga() {
  try {
    const requestURL = `http://ec2-18-217-168-29.us-east-2.compute.amazonaws.com/adaimpacto/api/v1/dashboard/course`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'x-access-token': auth.getToken(),
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_COURSES_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_COURSES_FAILED,
      error,
    });
  }
}
