import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the usuarios state domain
 */

const selectUsuariosDomain = state => state.usuarios || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Usuarios
 */

const makeSelectUsuarios = () =>
  createSelector(
    selectUsuariosDomain,
    substate => substate,
  );

export default makeSelectUsuarios;
export { selectUsuariosDomain };
