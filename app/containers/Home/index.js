/**
 *
 * Home
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import auth from 'utils/auth';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import styled from 'styled-components';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import Perfil from '../Perfil';
import Metricas from '../Metricas';
import Credito from '../Credito';
import Comportamiento from '../Comportamiento';
import Usuarios from '../Usuarios';
import Cursos from '../Cursos';
import { theme } from '../../themes';
import MenuLateral from '../../components/components/MenuLateral';
import Header from '../../components/components/Header';
import casa1 from '../../images/casa.png';
import casa2 from '../../images/casa2.png';
import d1 from '../../images/d1.png';
import d2 from '../../images/d2.png';
import m1 from '../../images/m1.png';
import m2 from '../../images/m2.png';
import usuaria from '../../images/usuaria.png';
import usuaria2 from '../../images/usuaria2.png';
import v1 from '../../images/v1.png';
import v2 from '../../images/v2.png';
import power from '../../images/apagar.png';
import logo from '../../images/Logo.png';
import {
  getInfoHome,
  getClientsAll,
  getMentors,
  getUsers,
  getNotifications,
  getVideos,
  getInfoHomeMicrowd,
  getInfoHomeProgresemos,
  getClientsMicrowd,
  getClientsProgresemos,
} from './actions';
const Main = styled.div`
  position: absolute;
  height: auto;
  min-height: 100%;
  width: 100%;
  background: ${theme.colors.background};
  .activate {
    background: ${theme.colors.background};
  }
  .button {
    background: transparent;
  }
  .ContainerPower {
    position: absolute;
    bottom: 7.593%;
    width: 100%;
    height: 5.741%;
  }
  .power {
    position: static;
    width: 55.357%;
    height: 100%;
    border-radius: 50%;
    background: ${theme.colors.primary};
    left: 0px;
  }
  .children {
    position: absolute;
    width: 94.115%;
    height: auto;
    min-height: 100%;
    z-index: 1;
    left: 5.885%;
    background: ${theme.colors.background};
  }
  .container {
    position: absolute;
    width: 100%;
    min-height: 90.574%;
    top: 9.426%;
  }
`;
export function Home(props) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });
  const [menu, setMenu] = useState(1);

  const Container = menuNum => {
    switch (menuNum.menu) {
      case 0:
        return <Perfil data={props.home.users} />;
      case 1:
        return <Metricas data={props.home.metricsHome} />;
      case 2:
        return <Credito />;
      case 3:
        return <Comportamiento />;
      case 4:
        return <Usuarios data={props.home.clientsAll} />;
      case 5:
        return <Cursos data={props.home.videos} />;
      default:
        return <Perfil />;
    }
  };

  const title = [
    'MI PERFIL',
    'M??TRICAS GENERALES',
    'CR??DITO',
    'COMPORTAMIENTO EN LA APP',
    'USUARIAS',
    'CURSOS Y V??DEOS',
  ];
  const options = [
    { value: 0, name: 'TODAS' },
    { value: 1, name: 'MICROWD' },
    { value: 2, name: 'PROGRESEMOS' },
  ];
  const date = [
    { value: 0, name: '2021 18 OCT - 20 OCT' },
    { value: 1, name: 'opcion1' },
    { value: 2, name: 'opcion2' },
    { value: 3, name: 'opcion3' },
  ];
  useEffect(() => {
    props.dispatch(getInfoHome('2021-09-27', '2022-01-13'));
    props.dispatch(getClientsAll());
    props.dispatch(getMentors());
    props.dispatch(getUsers());
    props.dispatch(getNotifications());
    props.dispatch(getVideos());
  }, []);

  const selectOption = option => {
    if (option === 'TODAS') {
      props.dispatch(getInfoHome('2021-09-27', '2022-01-13'));
      props.dispatch(getClientsAll());
    } else if (option === 'MICROWD') {
      props.dispatch(getInfoHomeMicrowd('2021-09-27', '2022-01-13'));
      props.dispatch(getClientsMicrowd());
    } else if (option === 'PROGRESEMOS') {
      props.dispatch(getInfoHomeProgresemos('2021-09-27', '2022-01-13'));
      props.dispatch(getClientsProgresemos());
    }
  };
  return (
    <Main>
      <MenuLateral>
        <div className="center containerLogo">
          <button className="logo" type="button" onClick={() => setMenu(0)}>
            <img src={logo} alt="logo" />
          </button>
        </div>
        <button
          type="button"
          className={menu === 1 ? 'activate' : 'button'}
          style={{ top: '20.204%' }}
          onClick={() => setMenu(1)}
        >
          <img src={menu === 1 ? casa2 : casa1} alt="casa" />
        </button>
        <button
          type="button"
          className={menu === 2 ? 'activate' : 'button'}
          style={{ top: '32.148%' }}
          onClick={() => setMenu(2)}
        >
          <img src={menu === 2 ? d2 : d1} alt="d1" />
        </button>
        <button
          type="button"
          className={menu === 3 ? 'activate' : 'button'}
          style={{ top: '44.556%' }}
          onClick={() => setMenu(3)}
        >
          <img src={menu === 3 ? m2 : m1} alt="m1" />
        </button>
        <button
          type="button"
          className={menu === 4 ? 'activate' : 'button'}
          style={{ top: '57.056%' }}
          onClick={() => setMenu(4)}
        >
          <img src={menu === 4 ? usuaria2 : usuaria} alt="usuaria" />
        </button>
        <button
          type="button"
          className={menu === 5 ? 'activate' : 'button'}
          style={{ top: '67.889%' }}
          onClick={() => setMenu(5)}
        >
          <img src={menu === 5 ? v2 : v1} style={{ height: '43%' }} alt="v1" />
        </button>
        <div className="center ContainerPower">
          <button type="button" className="power" onClick={() => auth.logout()}>
            <img src={power} alt="apagar" />
          </button>
        </div>
      </MenuLateral>
      <div className="children">
        <Header
          title={title[menu]}
          subtitle=" - ADA Impacto"
          actions
          options={options}
          date={date}
          selectOption={option => selectOption(option)}
        />
        <div className="container">
          <Container menu={menu} />
        </div>
      </div>
    </Main>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  home: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
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

export default compose(withConnect)(Home);
