import React from 'react';
import TableFilter from '../TableFilter/TableFilter';
import styled from 'styled-components';

const TableOverHead = () => {
  return (
    <STableOverHead>
      <TableFilter />
    </STableOverHead>
  );
};

const STableOverHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  @media screen and (min-width: 480px) {
    padding: 20px 8px 16px;
  }
`;
export default TableOverHead;
