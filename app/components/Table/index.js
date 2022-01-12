/**
 *
 * Table
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../themes';

const ContainerTable = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    width: 74px;
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    background: ${theme.colors.white};
    img {
      height: 43px;
    }
  }
  @media only screen and (min-width: 960px) {
    button {
      width: 40px;
      height: 40px;
      img {
        height: 20px;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    button {
      width: 48px;
      height: 48px;
      img {
        height: 25px;
      }
    }
  }
  @media only screen and (min-width: 1920px) {
    button {
      width: 74px;
      height: 74px;
      img {
        height: 43px;
      }
    }
  }
  @media only screen and (min-width: 2560px) {
    button {
      width: 92px;
      height: 92px;
      img {
        height: 50px;
      }
    }
  }
  @media only screen and (min-width: 3840px) {
    button {
      width: 150px;
      height: 150px;
      img {
        height: 80px;
      }
    }
  }
  @media only screen and (min-width: 7680px) {
    button {
      width: 280px;
      height: 280px;
      img {
        height: 150px;
      }
    }
  }
`;

function Table({ children }) {
  return <ContainerTable>{children}</ContainerTable>;
}

Table.propTypes = {
  children: PropTypes.element,
};

export default Table;
