/**
 *
 * Usuarios
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUsuarios from './selectors';
import reducer from './reducer';
import saga from './saga';
import User from '../../components/Usuarios/Users';

export function Usuarios(props) {
  useInjectReducer({ key: 'usuarios', reducer });
  useInjectSaga({ key: 'usuarios', saga });

  return (
    <div>
      <User data={props.data} />
    </div>
  );
}

Usuarios.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  data: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  usuarios: makeSelectUsuarios(),
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

export default compose(withConnect)(Usuarios);
