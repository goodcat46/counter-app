import React from 'react';
import DirectoryList from '../DirectoryList/DirectoryList';
import { useSelector } from 'react-redux';
import { getFilteredCounts } from 'redux/selectors.store';

const DirectoryOfCounts = props => {
  const { mainCounts = [], subCounts = [] } = useSelector(getFilteredCounts);

  return <DirectoryList list={mainCounts} subList={subCounts} {...props} />;
};

export default DirectoryOfCounts;
