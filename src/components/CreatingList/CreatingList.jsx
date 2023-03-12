import ModalDefault from 'components/ModalDefault/ModalDefault';
import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { getAllCounts } from 'redux/selectors.store';

const CreatingList = () => {
  const counts = useSelector(getAllCounts);
  console.table(counts);
  return (
    <ModalDefault>
      <List>CreatingList</List>
    </ModalDefault>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  padding: 4px;
  @media screen and (min-width: 480px) {
    padding: 8px;
    gap: 12px;
  }
  @media screen and (min-width: 960px) {
    padding: 16px;
  }
`;
export default CreatingList;
