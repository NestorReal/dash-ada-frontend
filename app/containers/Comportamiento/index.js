/**
 *
 * Comportamiento
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectComportamiento from './selectors';
import reducer from './reducer';
import saga from './saga';
import MainComportamiento from '../../components/Comportamiento/MainComportamiento';

export function Comportamiento() {
  useInjectReducer({ key: 'comportamiento', reducer });
  useInjectSaga({ key: 'comportamiento', saga });

  return (
    <div>
      <MainComportamiento />
    </div>
  );
}

Comportamiento.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  comportamiento: makeSelectComportamiento(),
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

export default compose(withConnect)(Comportamiento);
