import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the credito state domain
 */

const selectCreditoDomain = state => state.credito || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Credito
 */

const makeSelectCredito = () =>
  createSelector(
    selectCreditoDomain,
    substate => substate,
  );

export default makeSelectCredito;
export { selectCreditoDomain };
