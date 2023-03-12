import React, { useEffect, useState } from 'react';
import DirectoryList from '../DirectoryList/DirectoryList';
import { useSelector } from 'react-redux';
import { getFilteredCounts } from 'redux/selectors.store';
import ModalDefault from 'components/ModalDefault/ModalDefault';
const filterOptions = [
  { title: 'Активні', value: 'ACTIVE' },
  { title: 'Пасивні', value: 'PASSIVE' },
];

const DirectoryOfCounts = props => {
  const { mainCounts = [], subCounts = [] } = useSelector(getFilteredCounts);
  const [filteredList, setFilteredList] = useState([]);

  function onSelect(option) {
    console.log('option', option);

    setFilteredList(mainCounts.filter(count => count.type === option.value));
  }

  useEffect(() => {
    setFilteredList(mainCounts.filter(count => count.type === filterOptions[0].value));
  }, [mainCounts]);

  return (
    <ModalDefault {...{ ...props, filterOptions, onSelect }}>
      <DirectoryList list={filteredList} subList={subCounts} />
    </ModalDefault>
  );
};

export default DirectoryOfCounts;
