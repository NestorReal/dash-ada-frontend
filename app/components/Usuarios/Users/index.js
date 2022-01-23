/**
 *
 * Users
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import GridAuto from '../../components/GridAuto';
import Table from '../../components/Table';
import Ojo from '../../../images/ojo.png';

const ContainerUsuario = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 2.24% 2.38% 2.24%;
  color: #ea285d;
`;

const data = [
  {
    name: 'Nombre',
    phone: 'Teléfono',
    id: 'ID',
    financial: 'Financiera',
    state: 'Estado',
    user: 'Usuaria App',
  },
  {
    name: 'Nombre',
    phone: 'Teléfono',
    id: 'ID',
    financial: 'Financiera',
    state: 'Estado',
    user: 'Usuaria App',
  },
  {
    name: 'Nombre',
    phone: 'Teléfono',
    id: 'ID',
    financial: 'Financiera',
    state: 'Estado',
    user: 'Usuaria App',
  },
  {
    name: 'Nombre',
    phone: 'Teléfono',
    id: 'ID',
    financial: 'Financiera',
    state: 'Estado',
    user: 'Usuaria App',
  },
  {
    name: 'Nombre',
    phone: 'Teléfono',
    id: 'ID',
    financial: 'Financiera',
    state: 'Estado',
    user: 'Usuaria App',
  },
];

function Users() {
  return (
    <ContainerUsuario>
      {data.map(item => (
        <Table>
          <GridAuto width="93.38%">
            <div>
              <div style={{ left: '3%' }} className="circle" />
              <p>{item.name}</p>
            </div>
            <div>
              <p>{item.phone}</p>
            </div>
            <div>
              <p>{item.id}</p>
            </div>
            <div>
              <p>{item.financial}</p>
            </div>
            <div>
              <p>{item.state}</p>
            </div>
            <div>
              <p>{item.user}</p>
            </div>
          </GridAuto>
          <button type="button">
            <img style={{ height: '38.889%' }} src={Ojo} alt="basura" />
          </button>
        </Table>
      ))}
    </ContainerUsuario>
  );
}

Users.propTypes = {};

export default Users;
