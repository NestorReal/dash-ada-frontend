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

export function getInfoHome(initDate, finalDate) {
  return {
    type: constants.GET_INFO_HOME_INIT,
    initDate,
    finalDate,
  };
}
