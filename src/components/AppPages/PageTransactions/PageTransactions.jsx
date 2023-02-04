import React, { useState } from 'react';
import TableList from 'components/TableList/TableList';
import { useSelector } from 'react-redux';
import { transactionsSelector } from 'redux/selectors.store';
import { transactionsColumns } from 'data/transactions.data';
import { createRowData } from 'data/transactions.data';
import TableActions from '../../TableList/TableActions/TableActions';
import s from './PageTransactions.module.scss';

const PageTransactions = () => {
  const transactionsState = useSelector(transactionsSelector);
  const [selectedTr, setSelectedTr] = useState(null);

  function onRowClick(data) {
    setSelectedTr(selectedTr);
  }
  const tableSettings = {
    // tableTitles: transactionsState?.tableTitles || [],
    tableTitles: transactionsColumns,
    tableData: transactionsState?.transactions || [],
    onRowClick,
    createRowData,
    TableActionsComp: () => <TableActions />,
  };

  return (
    <>
      <div className={s.transactionsPage}>
        <TableList {...tableSettings} />
      </div>
    </>
  );
};

export default PageTransactions;
