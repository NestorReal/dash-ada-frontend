/**
 *
 * Perfil
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import styled from 'styled-components';
import makeSelectPerfil from './selectors';
import reducer from './reducer';
import saga from './saga';
import GridAuto from '../../components/components/GridAuto';
import { theme } from '../../themes';
import basura from '../../images/basura.png';
import Table from '../../components/components/Table';
const ContainerPerfil = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  min-height: 100%;
  overflow: auto;
  .divContenedor {
    position: absolute;
    width: 86.11%;
    top: 30.106%;
    left: 3.21%;
  }
  .containerText {
    position: absolute;
    top: 6.135%;
    left: 3.21%;
    color: ${theme.colors.primary};
    p {
      margin-top: 36px;
    }
  }
  .add {
    height: 90px;
    width: 90px;
    position: absolute;
    top: 17.382%;
    right: 10.238%;
    border-radius: 50%;
    background: ${theme.colors.white};
    color: ${theme.colors.text};
  }
  @media only screen and (min-width: 960px) {
    .add {
      width: 45px;
      height: 45px;
    }
  }
  @media only screen and (min-width: 1280px) {
    .add {
      width: 52px;
      height: 52px;
    }
  }
  @media only screen and (min-width: 1920px) {
    .add {
      width: 90px;
      height: 90px;
    }
  }
  @media only screen and (min-width: 2560px) {
    .add {
      width: 100px;
      height: 100px;
    }
  }
  @media only screen and (min-width: 3840px) {
    .add {
      width: 160px;
      height: 160px;
    }
  }
  @media only screen and (min-width: 7680px) {
    .add {
      width: 300px;
      height: 300px;
    }
  }
`;

export function Perfil(props) {
  useInjectReducer({ key: 'perfil', reducer });
  useInjectSaga({ key: 'perfil', saga });
  const data = [
    {
      emai: 'Joaquin@adaimpacto.com',
      permisos: 'Todos los permisos',
      pass: 'Cambiar contraseña',
    },
    {
      emai: 'Joaquin@adaimpacto.com',
      permisos: 'Todos los permisos',
      pass: 'Cambiar contraseña',
    },
    {
      emai: 'Joaquin@adaimpacto.com',
      permisos: 'Todos los permisos',
      pass: 'Cambiar contraseña',
    },
    {
      emai: 'Joaquin@adaimpacto.com',
      permisos: 'Todos los permisos',
      pass: 'Cambiar contraseña',
    },
    {
      emai: 'Joaquin@adaimpacto.com',
      permisos: 'Todos los permisos',
      pass: 'Cambiar contraseña',
    },
  ];
  let dataJson = [];
  if (Object.keys(props.data).length !== 0) {
    dataJson = props.data.data;
  }
  return (
    <ContainerPerfil>
      <div className="containerText">
        <h2>ADA@IMPACTO.COM</h2>
        <p>Cambiar contraseña</p>
      </div>
      <div className="add center">
        <h2>+</h2>
      </div>
      <div className="divContenedor">
        {dataJson.map(item => (
          <Table>
            <GridAuto width="93.38%">
              <div>
                <div className="circle" />
                <p>{item.email}</p>
              </div>
              <div>
                {/* <p>{item.permisos}</p> */}
                <p>Todos los permisos</p>
              </div>
              <div>
                {/* <p>{item.pass}</p> */}
                <p>Cambiar contraseña</p>
              </div>
            </GridAuto>
            <button type="button">
              <img src={basura} alt="basura" />
            </button>
          </Table>
        ))}
      </div>
    </ContainerPerfil>
  );
}

Perfil.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  data: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  perfil: makeSelectPerfil(),
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

export default compose(withConnect)(Perfil);
