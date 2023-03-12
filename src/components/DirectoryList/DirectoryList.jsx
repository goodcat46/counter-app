import ModalDefault from 'components/ModalDefault/ModalDefault';
import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';

const DirectoryList = ({ list = [], subList, title }) => {
  return (
    <ModalDefault title={title}>
      <List>
        {list.map((count, idx) => (
          <ListItem key={count?._id} {...count} isLast={list.length - 1 === idx} idx={idx} />
        ))}
      </List>
    </ModalDefault>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
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
export default DirectoryList;
