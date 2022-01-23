/**
 *
 * Rectangulo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../../themes';

const ContainerRectangulo = styled.div`
  width: 100%;
  height: 140px;
  padding: 0 8.441%;
  background: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 52px;
  margin-bottom: 3%;
  div {
    text-align: center;
    p {
      font-weight: bold;
    }
    div {
      padding: 0 54px;
      border-right: solid 2px ${theme.colors.secondary};
      h2 {
        line-height: 64px;
      }
    }
  }
  div:last-child {
    div {
      border-right: none;
    }
  }
  @media only screen and (min-width: 960px) {
    height: 90px;
    border-radius: 33px;
    div {
      div {
        padding: 0 26px;
        h2 {
          line-height: 50px;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    height: 110px;
    border-radius: 33px;
    div {
      div {
        padding: 0 39px;
        h2 {
          line-height: 55px;
        }
      }
    }
  }
  @media only screen and (min-width: 1920px) {
    height: 140px;
    border-radius: 52px;
    div {
      p {
        font-size: 14px;
      }
      div {
        padding: 0 54px;
        border-right: solid 2px ${theme.colors.secondary};
        h2 {
          line-height: 64px;
        }
      }
    }
  }
  @media only screen and (min-width: 2560px) {
    height: 170px;
    border-radius: 90px;
    div {
      p {
        font-size: 20px;
      }
      div {
        padding: 0 69px;
        border-right: solid 2px ${theme.colors.secondary};
        h2 {
          line-height: 85px;
        }
      }
    }
  }
  @media only screen and (min-width: 3840px) {
    height: 230px;
    border-radius: 150px;
    div {
      p {
        font-size: 24px;
      }
      div {
        padding: 0 133px;
        border-right: solid 5px ${theme.colors.secondary};
        h2 {
          line-height: 90px;
        }
      }
    }
  }
  @media only screen and (min-width: 7680px) {
    height: 400px;
    border-radius: 250px;
    div {
      p {
        font-size: 40px;
      }
      div {
        padding: 0 296px;
        border-right: solid 10px ${theme.colors.secondary};
        h2 {
          line-height: 160px;
        }
      }
    }
  }
`;

function Rectangulo({ data }) {
  return (
    <ContainerRectangulo>
      {data.map(item => (
        <div style={item.disable ? { opacity: '.5' } : null}>
          <p>{item.name}</p>
          <div>
            <h2>{item.value}</h2>
          </div>
        </div>
      ))}
    </ContainerRectangulo>
  );
}

Rectangulo.propTypes = {
  data: PropTypes.array,
};

export default Rectangulo;
