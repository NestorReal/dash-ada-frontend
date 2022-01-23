/**
 *
 * Login
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
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import Formulario from '../../components/Formulario';
import { theme } from '../../themes';
import { submit } from './actions';

const ContainerLogin = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${theme.colors.horizontalGradient};
  .titleWelcom {
    position: absolute;
    width: 41.146%;
    color: ${theme.colors.white};
    top: 31.667%;
    left: 4.115%;
  }
`;
export function Login(props) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  return (
    <ContainerLogin>
      <div className="titleWelcom">
        <h1>Bienvenido/a a tu dashboard de ADA Impacto</h1>
      </div>
      <Formulario
        submit={data =>
          props.dispatch(submit(data.user, data.password, props.history))
        }
      />
    </ContainerLogin>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
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

export default compose(withConnect)(Login);
