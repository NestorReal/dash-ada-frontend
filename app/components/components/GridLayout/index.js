/**
 *
 * GridLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../../themes';

const GridLayoutContainer = styled.div`
  .item1 {
    grid-area: item1;
  }
  .item2 {
    grid-area: item2;
  }
  .item3 {
    grid-area: item3;
  }
  .item4 {
    grid-area: item4;
  }
  .item5 {
    grid-area: item5;
  }
  .item6 {
    grid-area: item6;
  }
  .item7 {
    grid-area: item7;
  }
  .item8 {
    grid-area: item8;
  }
  display: grid;
  grid-template-areas:
    'item1 item1 item1'
    'item2 item3 item3'
    'item4 item4 item5'
    'item6 item7 item8';
  grid-row-gap: 3.122%;
  grid-column-gap: 3.341%;
  /* grid-gap: 60px; */

  .item1,
  .item2,
  .item3,
  .item4,
  .item5,
  .item6,
  .item7,
  .item8 {
    border-radius: 52px;
    padding: 42px 46px;
    background: ${theme.colors.white};
    height: 451px;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${theme.colors.primary};
      font-weight: bold;
      .circles {
        width: 60px;
        display: flex;
        justify-content: space-between;
        padding: 0px;
        div {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          padding: 0px;
        }
        div:first-child {
          background: ${theme.colors.primary};
        }
        div:last-child {
          background: ${theme.colors.secondary};
        }
      }
    }
  }
  @media only screen and (min-width: 960px) {
    .item1,
    .item2,
    .item3,
    .item4,
    .item5,
    .item6,
    .item7,
    .item8 {
      border-radius: 33px;
      padding: 21px 27px;
      height: 217px;
      .header {
        .circles {
          width: 32px;
          div {
            width: 13px;
            height: 13px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .item1,
    .item2,
    .item3,
    .item4,
    .item5,
    .item6,
    .item7,
    .item8 {
      border-radius: 33px;
      padding: 27px 30px;
      height: 227px;
      .header {
        .circles {
          width: 36px;
          div {
            width: 15px;
            height: 15px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1920px) {
    .item1,
    .item2,
    .item3,
    .item4,
    .item5,
    .item6,
    .item7,
    .item8 {
      border-radius: 52px;
      padding: 42px 46px;
      height: 451px;
      .header {
        .circles {
          width: 60px;
          div {
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 2560px) {
    .item1,
    .item2,
    .item3,
    .item4,
    .item5,
    .item6,
    .item7,
    .item8 {
      border-radius: 90px;
      padding: 50px 52px;
      height: 500px;
      .header {
        .circles {
          width: 80px;
          div {
            width: 35px;
            height: 35px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 3840px) {
    .item1,
    .item2,
    .item3,
    .item4,
    .item5,
    .item6,
    .item7,
    .item8 {
      border-radius: 150px;
      padding: 78px 85px;
      height: 800px;
      .header {
        .circles {
          width: 120px;
          div {
            width: 55px;
            height: 55px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 7680px) {
    .item1,
    .item2,
    .item3,
    .item4,
    .item5,
    .item6,
    .item7,
    .item8 {
      border-radius: 250px;
      padding: 120px 140px;
      height: 1500px;
      .header {
        .circles {
          width: 250px;
          div {
            width: 110px;
            height: 110px;
          }
        }
      }
    }
  }
`;

function GridLayout({ children }) {
  return <GridLayoutContainer>{children}</GridLayoutContainer>;
}

GridLayout.propTypes = {
  children: PropTypes.element,
};

export default GridLayout;
