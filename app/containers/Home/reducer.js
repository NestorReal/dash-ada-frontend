/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  metricsHome: {},
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.DEFAULT_ACTION:
        break;
      case constants.CHECK_REFERENCE_SUCCESS:
        draft.metricsHome = action.response;
        break;
    }
  });

export default homeReducer;
