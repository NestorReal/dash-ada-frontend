/**
 *
 * Cursos
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCursos from './selectors';
import reducer from './reducer';
import saga from './saga';
// import CursosVideos from '../../components/CursosVideos/CursosVideos';
import TodosVideos from '../../components/CursosVideos/TodosVideos';

export function Cursos(props) {
  useInjectReducer({ key: 'cursos', reducer });
  useInjectSaga({ key: 'cursos', saga });

  return (
    <div style={{ position: 'absolute', width: '100%', minHeight: '100%' }}>
      {/* <CursosVideos /> */}
      <TodosVideos data={props.data} />
    </div>
  );
}

Cursos.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  data: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  cursos: makeSelectCursos(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Cursos);
