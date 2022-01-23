/**
 *
 * TodosVideos
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../../themes';
import GridAuto from '../../components/GridAuto';
import Table from '../../components/Table';
import ojo2 from '../../../images/ojo2.png';
import lapiz2 from '../../../images/lapiz2.png';
import star1 from '../../../images/star1.png';
import star2 from '../../../images/star2.png';
import basura from '../../../images/basura.png';

const ContainerTodos = styled.div`
  padding: 3.487%;
  position: absolute;
  width: 100%;
  min-height: 100%;
  h2 {
    color: ${theme.colors.primary};
  }
  .star {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    margin-bottom: 0px;
    padding: 0 7%;
    img {
      height: 50%;
    }
  }
  .add {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5.4%;
    button {
      position: absolute;
      right: 3.55%;
      top: 5%;
      border-radius: 50%;
      background: ${theme.colors.white};
      border: none;
      width: 5%;
      height: 9%;
      h2 {
        color: ${theme.colors.black};
      }
    }
  }
`;

const data = [
  {
    name: 'nombre',
    star: false,
    curso: 'curso',
    visible: 'visible',
  },
  {
    name: 'nombre',
    star: true,
    curso: 'curso',
    visible: 'visible',
  },
  {
    name: 'nombre',
    star: false,
    curso: 'curso',
    visible: 'visible',
  },
];

function TodosVideos() {
  return (
    <ContainerTodos>
      <div className="add">
        <h2>CURSOS Y VÍDEOS - TODOS LOS VÍDEOS</h2>
        <button type="button">
          <h2>+</h2>
        </button>
      </div>

      {data.map(item => (
        <Table>
          <GridAuto width="85%">
            <div>
              <div className="star">
                <p>{item.name}</p>
                <img src={item.star ? star1 : star2} alt="star" />
              </div>
            </div>
            <div>
              <p>{item.curso}</p>
            </div>
            <div>
              <p>{item.visible}</p>
            </div>
          </GridAuto>
          <button type="button">
            <img style={{ height: '38.889%' }} src={ojo2} alt="eye" />
          </button>
          <button type="button">
            <img src={lapiz2} alt="editar" />
          </button>
          <button type="button">
            <img src={basura} alt="eliminar" />
          </button>
        </Table>
      ))}
    </ContainerTodos>
  );
}

TodosVideos.propTypes = {};

export default TodosVideos;
