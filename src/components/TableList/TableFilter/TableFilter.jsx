import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { iconId } from 'data';
import React, { useState } from 'react';
import SearchParamInput from './SearchParamInput/SearchParamInput';
import s from './TableFilter.module.scss';

import { transactionsColumns } from 'data/transactions.data';

const TableFilter = () => {
  const [searchParam, setSearchParam] = useState({});

  function onSelect(item) {
    console.log(item);
    setSearchParam(item);
  }
  return (
    <div className={s.tableFilter}>
      <ButtonIcon iconId={iconId.filterOff} size="28px" variant="text" />

      <input type="text" className={s.searchInput} placeholder="Пошук" />

      <SearchParamInput {...{ data: transactionsColumns, onSelect, searchParam, defaultValue: searchParam?.title }} />

      <ButtonIcon iconId={iconId.search} size="28px" variant="filled"></ButtonIcon>
    </div>
  );
};

export default TableFilter;
