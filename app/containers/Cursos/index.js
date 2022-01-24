/**
 *
 * Cursos
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCursos from './selectors';
import reducer from './reducer';
import saga from './saga';
import GridLayout from '../../components/GridLayout';
import Button from '../../components/Button';

export function Cursos() {
  useInjectReducer({ key: 'cursos', reducer });
  useInjectSaga({ key: 'cursos', saga });

  const ContainerCurso = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 2.24% 2.38% 2.24%;
    .containerButton {
      display: flex;
      justify-content: space-between;
      height: 9.475%;
      width: 33.764%;
    }
  `;

  return (
    <ContainerCurso>
      <div className="containerButton">
        <Button height="100%" width="48.3%" secondary text="CURSOS" />
        <Button height="100%" width="48.3%" secondary text="VÍDEOS" />
      </div>
      <GridLayout>
        <div className="item6">
          <div className="header">
            <p>REGISTROS</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="item7">
          <div className="header">
            <p>SESIONES</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="item8">
          <div className="header">
            <p>VÍDEOS</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
      </GridLayout>
      <div style={{ marginTop: '5.833%' }} />
      <GridLayout>
        <div className="item6">
          <div className="header">
            <p>USUARIOS</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="item7">
          <div className="header">
            <p>FEEDBACK</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="item8">
          <div className="header">
            <p>CALENDARIOS</p>
            <div className="circles">
              <div />
              <div />
            </div>
          </div>
        </div>
      </GridLayout>
    </ContainerCurso>
  );
}

Cursos.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cursos: makeSelectCursos(),
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

export default compose(withConnect)(Cursos);
