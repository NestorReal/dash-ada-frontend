/**
 *
 * Metricas
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMetricas from './selectors';
import reducer from './reducer';
import saga from './saga';
import MetricasGenerales from '../../components/MetricasGenerales/MetricasGenerales';

export function Metricas(props) {
  useInjectReducer({ key: 'metricas', reducer });
  useInjectSaga({ key: 'metricas', saga });
  return (
    <div>
      <MetricasGenerales data={props.data} />
    </div>
  );
}

Metricas.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  data: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  metricas: makeSelectMetricas(),
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

export default compose(withConnect)(Metricas);
