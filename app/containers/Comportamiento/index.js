/**
 *
 * Comportamiento
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
import makeSelectComportamiento from './selectors';
import reducer from './reducer';
import saga from './saga';
import GridLayout from '../../components/GridLayout';

export function Comportamiento() {
  useInjectReducer({ key: 'comportamiento', reducer });
  useInjectSaga({ key: 'comportamiento', saga });
  const ContainerComportamiento = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 2.24% 2.38% 2.24%;
    color: #ea285d;
  `;
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

Comportamiento.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  comportamiento: makeSelectComportamiento(),
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

export default compose(withConnect)(Comportamiento);
