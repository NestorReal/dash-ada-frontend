/**
 *
 * MetricasGenerales
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import GridLayout from '../../components/GridLayout';
import Rectangulo from '../../components/Rectangulo';

const ContainerMetrica = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 2.24% 2.38% 2.24%;
`;

function MetricasGenerales() {
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

MetricasGenerales.propTypes = {};

export default MetricasGenerales;
