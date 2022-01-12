import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the comportamiento state domain
 */

const selectComportamientoDomain = state =>
  state.comportamiento || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Comportamiento
 */

const makeSelectComportamiento = () =>
  createSelector(
    selectComportamientoDomain,
    substate => substate,
  );

export default makeSelectComportamiento;
export { selectComportamientoDomain };
