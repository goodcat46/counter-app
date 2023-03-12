import React, { useEffect, useState } from 'react';
import DirectoryList from 'components/DirectoryList/DirectoryList';
import { useSelector } from 'react-redux';
import { getFilteredCategories } from 'redux/selectors.store';
import ModalDefault from 'components/ModalDefault/ModalDefault';

const filterOptions = [
  { title: 'Доходи', value: 'INCOME' },
  { title: 'Перекази', value: 'TRANSFER' },
  { title: 'Витрати', value: 'EXPENSE' },
];

const DirectoryOfCategories = props => {
  const { mainCategories = [], subCategories = [] } = useSelector(getFilteredCategories);
  const [filteredList, setFilteredList] = useState([]);

  function onSelect(option) {
    console.log('option', option);

    setFilteredList(mainCategories.filter(count => count.type === option.value));
  }

  useEffect(() => {
    setFilteredList(mainCategories.filter(count => count.type === filterOptions[0].value));
  }, [mainCategories]);
  return (
    <ModalDefault {...{ ...props, filterOptions, onSelect }}>
      <DirectoryList list={filteredList} subList={subCategories} />
    </ModalDefault>
  );
};

export default DirectoryOfCategories;
