import React from 'react';
import DirectoryList from 'components/DirectoryList/DirectoryList';
import { useSelector } from 'react-redux';
import { getFilteredCategories } from 'redux/selectors.store';

const DirectoryOfCategories = () => {
  const { mainCategories = [], subCategories = [] } = useSelector(getFilteredCategories);

  return <DirectoryList list={mainCategories} subList={subCategories} />;
};

export default DirectoryOfCategories;
