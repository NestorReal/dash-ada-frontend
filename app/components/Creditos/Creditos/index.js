/**
 *
 * Creditos
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import GridLayout from '../../components/GridLayout';

const ContainerCredito = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 2.24% 2.38% 2.24%;
  color: #ea285d;
`;

function Creditos() {
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

Creditos.propTypes = {};

export default Creditos;
