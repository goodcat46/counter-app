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
  @media screen and (min-width: 960px) {
    padding: 28px 12px 20px;
  }
`;
export default TableOverHead;
