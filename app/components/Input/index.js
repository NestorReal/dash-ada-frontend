/**
 *
 * Input
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../themes';

const InputStyle = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${theme.colors.white};
  border-radius: 55px;
  color: ${theme.colors.text};
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    border: none;
    text-align: center;
    opacity: 0.5;
    background: transparent;
    &:focus {
      outline: none;
    }
  }
  @media only screen and (min-width: 960px) {
    input {
      font-size: 20px !important;
    }
  }
  @media only screen and (min-width: 1280px) {
    input {
      font-size: 25px !important;
    }
  }
  @media only screen and (min-width: 1920px) {
    input {
      font-size: 40px !important;
    }
  }
  @media only screen and (min-width: 2560px) {
    input {
      font-size: 60px !important;
    }
  }
  @media only screen and (min-width: 3840px) {
    input {
      font-size: 70px !important;
    }
  }
  @media only screen and (min-width: 7680px) {
    input {
      font-size: 130px !important;
    }
  }
`;

function Input({ placeholder, value, type, onChange, width, height }) {
  return (
    <InputStyle width={width} height={height}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputStyle>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Input;
