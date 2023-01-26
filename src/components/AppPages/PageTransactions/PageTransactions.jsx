import React from 'react';
import TableList from 'components/TableList/TableList';
import { transactionsTableTitles, transactionsTableData as tableData } from 'data';

import s from './PageTransactions.module.scss';

const PageTransactions = () => {
  const tableSettings = {
    tableTitles: transactionsTableTitles,
    tableData,
  };
  return (
    <div className={s.transactionsPage}>
      <TableList {...tableSettings} />
    </div>
  );
};

export default PageTransactions;
