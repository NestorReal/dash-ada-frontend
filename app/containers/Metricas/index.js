/**
 *
 * Metricas
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
import makeSelectMetricas from './selectors';
import reducer from './reducer';
import saga from './saga';
import GridLayout from '../../components/GridLayout';
import Rectangulo from '../../components/Rectangulo';

const ContainerMetrica = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 2.24% 2.38% 2.24%;
`;

export function Metricas() {
  useInjectReducer({ key: 'metricas', reducer });
  useInjectSaga({ key: 'metricas', saga });
  const data = [
    { name: 'Nº DE CLIENTES', value: '2.000' },
    { name: 'PRÉSTAMOS OTORGADOS', value: '1.450' },
    { name: 'CAPITAL ACTIVO', value: '45.000' },
    { name: 'MONTO PRÉSTAMO PROMEDIO', value: '2.000' },
    { name: 'TASA DE RETENCIÓN', value: '75%' },
    { name: 'PORTFOLIO EN RIESGO', value: '20%' },
  ];
  return (
    <ContainerMetrica>
      <Rectangulo data={data} />
      <GridLayout>
        <div className="item2">
          <div className="header">
            mapa
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="item3">
          <div className="header">
            monto desembolsado
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="item6">
          <div className="header">
            nuevos clientes
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="item7">
          <div className="header">
            APP/BOT ENGAGEMMENT
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="item8">
          <div className="header">
            PERFORMANCE FINANCIERAS
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
      </GridLayout>
    </ContainerMetrica>
  );
}

Metricas.propTypes = {
  // dispatch: PropTypes.func.isRequired,
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
