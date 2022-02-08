/**
 *
 * Detail video
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
    <ContainerMetrica>
      <>
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
                <p>Titulo</p>
                <div className="circles" />
                <div className="circles" />
              </div>
              <div>Cómo diferenciarse en el mercado</div>
            </div>
            <div className="item3">
              <div className="header">
                <p>Descripccion</p>
                <div className="circles">
                  <div />
                </div>
              </div>
              <div style={{ padding: '19px' }}>
                Lorem Ipsum has been the industry’s standard dummy <br />
                text ever since the 1500s, when an unknown printer took a <br />
                galley of type and scrambled it to make a type specimen <br />
                book. It has survived not only five centuries.
              </div>
            </div>
          </GridLayout>
          <div style={{ marginTop: '2.833%' }} />
          <GridLayout>
            <div className="item2">
              <div className="header">
                <p>CURSO</p>
                <div className="circles" />
              </div>
              <div>Mejora tu tienda</div>
            </div>
            <div className="item3">
              <div className="header">
                <p>ARCHIVO DESCARGABLE</p>
                <div className="circles">
                  <div />
                  <div />
                </div>
              </div>
              <div>mejoratutienda.pdf</div>
            </div>
          </GridLayout>
          <div style={{ marginTop: '2.833%' }} />
          <GridLayout>
            <div className="item2">
              <div className="header">
                <p>IMAGEN</p>
                <div className="circles" />
              </div>
            </div>
            <div className="item3">
              <div className="header">
                <p>VIDEO</p>
                <div className="circles">
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </GridLayout>
        </div>
      </>
    </ContainerMetrica>
  );
}

DetailUser.propTypes = {};

export default DetailUser;
