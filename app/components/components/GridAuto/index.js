/**
 *
 * GridAuto
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../../themes';

const Grid = styled.div`
  width: ${props => props.width};
  display: grid;
  grid-template-columns: ${props => props.auto.map(() => 'auto ')};
  grid-gap: 10px;
  .circle {
    position: absolute;
    width: 52px;
    height: 52px;
    left: 22px;
    margin: 0px;
    border-radius: 50% !important;
    background: ${theme.colors.primary};
  }
  div {
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 21px;
  }
  div:first-child {
    border-radius: 48px 0 0 48px;
  }
  div:last-child {
    border-radius: 0 48px 48px 0;
  }
  @media only screen and (min-width: 960px) {
    div {
      height: 40px;
      margin-bottom: 8px;
    }
    .circle {
      width: 25px;
      height: 25px;
    }
  }
  @media only screen and (min-width: 1280px) {
    div {
      height: 44px;
      margin-bottom: 10px;
    }
    .circle {
      width: 33px;
      height: 33px;
    }
  }
  @media only screen and (min-width: 1920px) {
    div {
      height: 74px;
      margin-bottom: 21px;
    }
    .circle {
      width: 52px;
      height: 52px;
    }
  }
  @media only screen and (min-width: 2560px) {
    div {
      height: 95px;
      margin-bottom: 25px;
    }
    .circle {
      width: 60px;
      height: 60px;
    }
  }
  @media only screen and (min-width: 3840px) {
    div {
      height: 150px;
      margin-bottom: 35px;
    }
    div:first-child {
      border-radius: 150px 0 0 150px;
    }
    div:last-child {
      border-radius: 0 150px 150px 0;
    }
    .circle {
      width: 90px;
      height: 90px;
    }
  }
  @media only screen and (min-width: 7680px) {
    div {
      height: 300px;
      margin-bottom: 50px;
    }
    div:first-child {
      border-radius: 300px 0 0 300px;
    }
    div:last-child {
      border-radius: 0 300px 300px 0;
    }
    .circle {
      width: 180px;
      height: 180px;
      left: 100px;
    }
  }
`;

function GridAuto({ width, children }) {
  return (
    <Grid auto={children} width={width}>
      {children}
    </Grid>
  );
}

GridAuto.propTypes = {
  width: PropTypes.string,
  children: PropTypes.element,
};

export default GridAuto;
