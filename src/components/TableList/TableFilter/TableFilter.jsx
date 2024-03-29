import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useModalProvider } from 'components/ModalProvider/ModalProvider';
import { iconId } from 'data';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useTable } from '../TableContext';
import Filter from './Filter/Filter';
import SearchParamInput from './SearchParamInput/SearchParamInput';

const TableFilter = () => {
  const modal = useModalProvider();
  const [searchParam, setSearchParam] = useState({});
  const { tableSearchParams } = useTable();

  function onSelect(item) {
    console.log(item);
    setSearchParam(item);
  }

  return (
    <FilterContainer>
      <ButtonIcon
        iconId={iconId.filterOff}
        size="28px"
        variant="text"
        onClick={() => {
          modal.handleOpenModal({ ModalChildren: Filter });
        }}
      />

      <SearchInput type="text" placeholder="Пошук" />

      <SearchParamInput {...{ data: tableSearchParams, onSelect, searchParam, defaultValue: searchParam?.title }} />

      <ButtonIcon iconId={iconId.search} size="28px" variant="filled" />
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1.2fr 1fr min-content;
  grid-template-rows: 28px;
  gap: 8px;

  color: inherit;
`;

const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  padding: 4px 8px;

  font-size: 12px;
  font-family: inherit;
  color: inherit;

  &::placeholder {
    color: var(--inputPlaceholderClr);
  }
  background-color: transparent;

  border-style: none;
  border-bottom: 1px solid var(--inputBorder);
  &:focus {
    border-radius: 2px;
    border: 1px solid transparent;
    border-bottom: 1px solid var(--darkOrange);
  }
`;
export default TableFilter;
