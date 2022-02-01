/**
 *
 * MetricasGenerales
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GridLayout from '../../components/GridLayout';
import Rectangulo from '../../components/Rectangulo';
// eslint-disable-next-line import/no-unresolved
const humanFormat = require('human-format');

const ContainerMetrica = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 2.24% 2.38% 2.24%;
`;

function MetricasGenerales(props) {
  let dataJson = [];
  if (Object.keys(props.data).length !== 0) {
    const { data } = props.data;
    dataJson = [
      { name: 'Nº DE CLIENTES', value: humanFormat(data.totalClients) },
      {
        name: 'PRÉSTAMOS OTORGADOS',
        value: humanFormat(data.totalLoansGranted),
      },
      { name: 'CAPITAL ACTIVO', value: humanFormat(data.capitalActive) },
      {
        name: 'MONTO PRÉSTAMO PROMEDIO',
        value: humanFormat(data.averageLoanAmount),
      },
      { name: 'TASA DE RETENCIÓN', value: `${data.rateRetention}%` },
      { name: 'PORTFOLIO EN RIESGO', value: `${data.portfolioRisk}%` },
    ];
  }
  return (
    <ContainerMetrica>
      <Rectangulo data={dataJson} />
      <GridLayout>
        <div className="item2">
          <div className="header">
            <p>mapa</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="item3">
          <div className="header">
            <p>monto desembolsado</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="item6">
          <div className="header">
            <p>nuevos clientes</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="item7">
          <div className="header">
            <p>APP/BOT ENGAGEMMENT</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="item8">
          <div className="header">
            <p>PERFORMANCE FINANCIERAS</p>
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

MetricasGenerales.propTypes = {
  data: PropTypes.object,
};

export default MetricasGenerales;
