/**
 *
 * Users Detail
 *
 */

import React from 'react';
import styled from 'styled-components';
import GridLayout from '../../components/GridLayout';

const ContainerMetrica = styled.div`
  width: 100%;
  height: auto;
  overflow: auto;
  padding: 2.24% 2.38% 2.24%;
  color: #ea285d;
`;

function DetailUser() {
  return (
    <>
      <ContainerMetrica>
        <div
          style={{
            width: '91.5',
            backgroundColor: '',
            borderRadius: '50px 50px',
            padding: '1rem',
          }}
        >
          <GridLayout>
            <div className="item2">
              <div className="header">
                <p>Informaciòn personal</p>
                <div className="circles" />
                <div className="circles" />
              </div>
            </div>
            <div className="item3">
              <div className="header">
                <p>Informaciòn de pagos</p>
                <div className="circles">
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </GridLayout>
          <div style={{ marginTop: '2.833%' }} />
          <GridLayout>
            <div className="item1">
              <div className="header">
                <p>FEEDBACK</p>
                <div className="circles">
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </GridLayout>
          <div style={{ marginTop: '2.833%' }} />
          <GridLayout>
            <div className="item2">
              <div className="header">
                <p>Actividad Videos</p>
                <div className="circles" />
              </div>
            </div>
            <div className="item3">
              <div className="header">
                <p>HISTORIAL APLICACION DE CREDITO</p>
                <div className="circles">
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </GridLayout>
        </div>
      </ContainerMetrica>
    </>
  );
}

DetailUser.propTypes = {};

export default DetailUser;
