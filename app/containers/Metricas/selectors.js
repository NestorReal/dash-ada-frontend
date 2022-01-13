import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the metricas state domain
 */

const selectMetricasDomain = state => state.metricas || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Metricas
 */

const makeSelectMetricas = () =>
  createSelector(
    selectMetricasDomain,
    substate => substate,
  );

export default makeSelectMetricas;
export { selectMetricasDomain };
