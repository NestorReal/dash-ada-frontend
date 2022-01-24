/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../../themes';
import search from '../../../images/bus.png';

const ContainerHeader = styled.div`
  position: absolute;
  width: 100%;
  height: 5.093%;
  top: 4.444%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.826% 0 3.21%;
  z-index: 1;
  .actions {
    width: 55.672%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title {
    color: ${theme.colors.primary};
    font-weight: normal;
  }
  .input {
    height: 100%;
    width: 48.676%;
    background: ${theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 56px;
    padding-left: 4.731%;
    img {
      height: 54.545%;
    }
    input {
      width: 90%;
      height: 100%;
      border: none;
      border-radius: 56px;
      color: ${theme.colors.black};
      &:focus {
        outline: none;
      }
    }
  }
  .select {
    padding: 0 3.664%;
    border-radius: 56px;
    background: ${theme.colors.white};
    height: 100%;
  }
  select {
    height: 100%;
    border: none;
    color: ${theme.colors.black};
    font-weight: bold;
    background: ${theme.colors.white};
    &:focus {
      outline: none;
    }
  }
  @media only screen and (min-width: 3840px) {
    .input {
      border-radius: 100px;
    }
  }
  @media only screen and (min-width: 7680px) {
    .input {
      border-radius: 100px;
    }
  }
`;

function Header({ title, subtitle, actions, options, date }) {
  return (
    <ContainerHeader>
      <h6 className="title">
        <b>{title}</b>
        {subtitle}
      </h6>
      {actions ? (
        <div className="actions">
          <div className="input">
            <img src={search} alt="buscar" />
            <input placeholder="Busca por prestataria, financiera…" />
          </div>
          <div className="select">
            <select>
              {options.map((item, index) => (
                <option selected={index === 0} key={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="select">
            <select>
              {date.map((item, index) => (
                <option selected={index === 0} key={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : null}
    </ContainerHeader>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  actions: PropTypes.bool,
  options: PropTypes.array,
  date: PropTypes.array,
};

export default Header;
