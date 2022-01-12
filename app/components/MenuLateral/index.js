/**
 *
 * MenuLateral
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../themes';

const Menu = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 5.885%;
  background: ${theme.colors.verticalGradient};
  .containerLogo {
    position: absolute;
    top: 4.074%;
    width: 100%;
    height: 5.741%;
  }
  button {
    position: absolute;
    height: 7.037%;
    width: 90%;
    left: 13.595%;
    border: none;
    border-radius: 56px 0 0 56px;
    img {
      height: 61.333%;
    }
  }
  .logo {
    position: static;
    width: 55.357%;
    height: 100%;
    background: ${theme.colors.white};
    border-radius: 50%;
    border: solid 4px ${theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 24.194%;
    }
  }
  @media only screen and (min-width: 960px) {
    .logo {
      border: solid 2px ${theme.colors.secondary};
    }
    button {
      border-radius: 56px 0 0 56px;
    }
  }
  @media only screen and (min-width: 1280px) {
    .logo {
      border: solid 2.5px ${theme.colors.secondary};
    }
  }
  @media only screen and (min-width: 1920px) {
    .logo {
      border: solid 4px ${theme.colors.secondary};
    }
  }
  @media only screen and (min-width: 2560px) {
    .logo {
      border: solid 5px ${theme.colors.secondary};
    }
  }
  @media only screen and (min-width: 3840px) {
    .logo {
      border: solid 7px ${theme.colors.secondary};
    }
    button {
      border-radius: 100px 0 0 100px;
    }
  }
  @media only screen and (min-width: 7680px) {
    .logo {
      border: solid 10px ${theme.colors.secondary};
    }
    button {
      border-radius: 150px 0 0 150px;
    }
  }
`;

function MenuLateral({ children }) {
  return <Menu>{children}</Menu>;
}

MenuLateral.propTypes = {
  children: PropTypes.element,
};

export default MenuLateral;
