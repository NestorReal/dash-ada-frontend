/**
 *
 * Users
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
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

function Users(props) {
  let dataJson = [];
  if (Object.keys(props.data).length !== 0) {
    dataJson = props.data.data;
  }
  return (
    <ContainerUsuario>
      {dataJson.map(item => (
        <Table>
          <GridAuto width="91.5%">
            <div title={`${item.firstName} ${item.lastName}`}>
              <div style={{ left: '3%' }} className="circle" />
              <p>
                {item.firstName.length < 10
                  ? item.firstName
                  : item.firstName.substring(0, 10)}
              </p>
            </div>
            <div>
              <p>{item.phoneNumber}</p>
            </div>
            <div>
              <p>{item['_id']}</p>
            </div>
            <div>
              <p>{item.company_id.name}</p>
            </div>
            <div>
              <p>{item.community !== undefined ? item.community : '-'}</p>
            </div>
            <div>
              <p>Usuaria app</p>
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

Users.propTypes = {
  data: PropTypes.object,
};

export default Users;
