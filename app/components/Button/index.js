/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../themes';

const ContainerButton = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${theme.colors.primary};
  border: none;
  border-radius: 55px;
  color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function Button({ text, onClick, width, height }) {
  return (
    <ContainerButton onClick={onClick} width={width} height={height}>
      <h3>{text}</h3>
    </ContainerButton>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Button;
