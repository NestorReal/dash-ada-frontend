import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cursos state domain
 */

const selectCursosDomain = state => state.cursos || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Cursos
 */

const makeSelectCursos = () =>
  createSelector(
    selectCursosDomain,
    substate => substate,
  );

export default makeSelectCursos;
export { selectCursosDomain };
