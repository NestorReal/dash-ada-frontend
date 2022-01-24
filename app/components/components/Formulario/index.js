/**
 *
 * Formulario
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import { theme } from '../../../themes';

const ContainerFormulario = styled.div`
  position: absolute;
  top: 9.907%;
  right: 11.302%;
  height: 80.185%;
  width: 35.26%;
  background: ${theme.colors.background};
  border-radius: 2.969%;
  padding: 5.417% 3.281% 6.852% 3.229%;
  .title {
    color: ${theme.colors.primary};
    height: 7.619%;
    font-weight: bold;
  }
  .subtitle {
    color: ${theme.colors.primary};
    height: 7.619%;
    margin-bottom: 6.667%;
  }
  .link {
    color: ${theme.colors.black};
    width: 100%;
    text-align: center;
    margin-top: 19.048%;
  }
  .margin {
    margin-top: 4.127%;
    margin-bottom: 11.746%;
    height: 14.921%;
  }
`;

function Formulario(props) {
  const [state, setState] = useState({
    user: '',
    password: '',
  });
  return (
    <ContainerFormulario>
      <div className="title">
        <h4>LOGIN</h4>
      </div>
      <div className="subtitle">
        <h5 style={{ fontWeight: 'normal' }}>
          Introduce tu usuario y contraseña
        </h5>
      </div>
      <Input
        placeholder="Usuario"
        type="text"
        onChange={() => setState({ ...state, user: event.target.value })}
        value={state.user}
        height="14.921%"
      />
      <div className="margin">
        <Input
          placeholder="Contraseña"
          type="password"
          onChange={() => setState({ ...state, password: event.target.value })}
          value={state.password}
          height="100%"
        />
      </div>
      <Button
        height="14.921%"
        width="100%"
        text="¡ENTRAR!"
        onClick={() => props.submit(state)}
      />
      <div className="link">
        <h6 style={{ fontWeight: 'normal' }}>
          ¿Tienes problemas para entrar? <b>Escríbenos</b>
        </h6>
      </div>
    </ContainerFormulario>
  );
}

Formulario.propTypes = {
  submit: PropTypes.func,
};

export default Formulario;
