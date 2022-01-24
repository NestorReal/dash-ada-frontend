/**
 *
 * Credito
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import styled from 'styled-components';
import makeSelectCredito from './selectors';
import reducer from './reducer';
import saga from './saga';
import GridLayout from '../../components/GridLayout';

export function Credito() {
  useInjectReducer({ key: 'credito', reducer });
  useInjectSaga({ key: 'credito', saga });
  const ContainerCredito = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 2.24% 2.38% 2.24%;
    color: #ea285d;
  `;
  return (
    <ContainerCredito>
      <GridLayout>
        <div className="item2">
          <div className="header">
            <p>CALENDARIO</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="item3">
          <div className="header">
            <p>PAGO DE CUOTAS</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
      </GridLayout>
      <div style={{ marginTop: '5.833%' }} />
      <GridLayout>
        <div className="item1">
          <div className="header">
            <p>SOLICITUD / NUEVOS CRÉDITOS</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
      </GridLayout>
    </ContainerCredito>
  );
}

Credito.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  credito: makeSelectCredito(),
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

export default compose(withConnect)(Credito);
