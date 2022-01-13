import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the perfil state domain
 */

const selectPerfilDomain = state => state.perfil || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Perfil
 */

const makeSelectPerfil = () =>
  createSelector(
    selectPerfilDomain,
    substate => substate,
  );

export default makeSelectPerfil;
export { selectPerfilDomain };
