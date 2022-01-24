/*
 *
 * Home actions
 *
 */

import * as constants from './constants';

export function defaultAction() {
  return {
    type: constants.DEFAULT_ACTION,
  };
}

export function getClientsAll() {
  return {
    type: constants.GET_CLIENTS_ALL_INIT,
  };
}

export function getClientsAllByDate(initDate, finalDate) {
  return {
    type: constants.GET_CLIENTS_DATE_INIT,
    initDate,
    finalDate,
  };
}

export function getInfoHome(initDate, finalDate) {
  return {
    type: constants.GET_INFO_HOME_INIT,
    initDate,
    finalDate,
  };
}

export function getClientsMicrowd() {
  return {
    type: constants.GET_CLIENTS_MICROWD_INIT,
  };
}

export function getClientsMicrowdID(id) {
  return {
    type: constants.GET_CLIENTS_MICROWD_ID_INIT,
    id,
  };
}

export function getClientsMicrowdByDate(initDate, finalDate) {
  return {
    type: constants.GET_CLIENTS_MICROWD_DATE_INIT,
    initDate,
    finalDate,
  };
}

export function getInfoHomeMicrowd(initDate, finalDate) {
  return {
    type: constants.GET_INFO_HOME_MICROWD_INIT,
    initDate,
    finalDate,
  };
}

export function getClientsProgresemos() {
  return {
    type: constants.GET_CLIENTS_PROGRESEMOS_INIT,
  };
}

export function getClientsProgresemosID(id) {
  return {
    type: constants.GET_CLIENTS_PROGRESEMOS_ID_INIT,
    id,
  };
}

export function getClientsProgresemosByDate(initDate, finalDate) {
  return {
    type: constants.GET_CLIENTS_PROGRESEMOS_DATE_INIT,
    initDate,
    finalDate,
  };
}

export function getInfoHomeProgresemos(initDate, finalDate) {
  return {
    type: constants.GET_INFO_HOME_PROGRESEMOS_INIT,
    initDate,
    finalDate,
  };
}

export function getMentors() {
  return {
    type: constants.GET_MENTORS_INIT,
  };
}

export function getUsers() {
  return {
    type: constants.GET_USERS_INIT,
  };
}

export function getNotifications() {
  return {
    type: constants.GET_NOTIFICATIONS_INIT,
  };
}

export function getVideos() {
  return {
    type: constants.GET_VIDEOS_INIT,
  };
}

export function getCourses() {
  return {
    type: constants.GET_COURSES_INIT,
  };
}
