/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  clientsAll: {},
  metricsHome: {},
  clientId: {},
  mentors: {},
  users: {},
  notifications: {},
  videos: {},
  courses: {},
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.DEFAULT_ACTION:
        break;
      case constants.GET_CLIENTS_ALL_SUCCESS:
        draft.clientsAll = action.response;
        break;
      case constants.GET_CLIENTS_DATE_SUCCESS:
        draft.clientsAll = action.response;
        break;
      case constants.GET_INFO_HOME_SUCCESS:
        draft.metricsHome = action.response;
        break;
      case constants.GET_CLIENTS_MICROWD_SUCCESS:
        draft.clientsAll = action.response;
        break;
      case constants.GET_CLIENTS_MICROWD_ID_SUCCESS:
        draft.clientId = action.response;
        break;
      case constants.GET_CLIENTS_MICROWD_DATE_SUCCESS:
        draft.clientsAll = action.response;
        break;
      case constants.GET_INFO_HOME_MICROWD_SUCCESS:
        draft.metricsHome = action.response;
        break;
      case constants.GET_CLIENTS_PROGRESEMOS_SUCCESS:
        draft.clientsAll = action.response;
        break;
      case constants.GET_CLIENTS_PROGRESEMOS_ID_SUCCESS:
        draft.clientId = action.response;
        break;
      case constants.GET_CLIENTS_PROGRESEMOS_DATE_SUCCESS:
        draft.clientsAll = action.response;
        break;
      case constants.GET_INFO_HOME_PROGRESEMOS_SUCCESS:
        draft.metricsHome = action.response;
        break;
      case constants.GET_MENTORS_SUCCESS:
        draft.mentors = action.response;
        break;
      case constants.GET_USERS_SUCCESS:
        draft.users = action.response;
        break;
      case constants.GET_NOTIFICATIONS_SUCCESS:
        draft.notifications = action.response;
        break;
      case constants.GET_VIDEOS_SUCCESS:
        draft.videos = action.response;
        break;
      case constants.GET_COURSES_SUCCESS:
        draft.courses = action.response;
        break;
    }
  });

export default homeReducer;
