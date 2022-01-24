/**
 *
 * MainComportamiento
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import GridLayout from '../../components/GridLayout';

const ContainerComportamiento = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 2.24% 2.38% 2.24%;
  color: #ea285d;
`;

function MainComportamiento() {
  return (
    <ContainerComportamiento>
      <GridLayout>
        <div className="item2">
          <div className="header">
            <p>MEDALLAS</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="item3">
          <div className="header">
            <p>ACTIVIDAD</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="item4">
          <div className="header">
            <p>NOTIFICACIONES</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="item5">
          <div className="header">
            <p>FEEDBACK</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
      </GridLayout>
    </ContainerComportamiento>
  );
}

MainComportamiento.propTypes = {};

export default MainComportamiento;
