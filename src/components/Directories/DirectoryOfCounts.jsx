import React, { useEffect, useState } from 'react';
import DirectoryList from '../DirectoryList/DirectoryList';
import { useSelector } from 'react-redux';
import { getFilteredCounts } from 'redux/selectors.store';
import ModalDefault from 'components/ModalDefault/ModalDefault';
const filterOptions = [
  { title: 'Активні', value: 'ACTIVE' },
  { title: 'Пасивні', value: 'PASSIVE' },
];
// onSelect
const DirectoryOfCounts = props => {
  const { mainCounts = [], subCounts = [] } = useSelector(getFilteredCounts);
  const [counts, setCounts] = useState([]);

  function onSelect(option) {
    console.log('option', option);

    setCounts(mainCounts.filter(count => count.type === option.value));
  }

  useEffect(() => {
    setCounts(mainCounts.filter(count => count.type === filterOptions[0].value));
  }, [mainCounts]);

  return (
    <ModalDefault {...{ ...props, filterOptions, onSelect }}>
      <DirectoryList list={counts} subList={subCounts} />
    </ModalDefault>
  );
};

export default DirectoryOfCounts;
