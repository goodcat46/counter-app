import React from 'react';
import TableList from 'components/TableList/TableList';
import { useSelector } from 'react-redux';
import { transactionsSelector } from 'redux/selectors';

import s from './PageTransactions.module.scss';

const PageTransactions = () => {
  const transactionsState = useSelector(transactionsSelector);

  const tableSettings = {
    tableTitles: transactionsState?.tableTitles || [],
    tableData: transactionsState?.transactions || [],
  };
  return (
    <div className={s.transactionsPage}>
      <TableList {...tableSettings} />
    </div>
  );
};

export default PageTransactions;
