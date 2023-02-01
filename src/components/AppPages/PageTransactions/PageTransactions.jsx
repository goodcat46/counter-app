import React, { useEffect, useState } from 'react';
import TableList from 'components/TableList/TableList';
import { useSelector } from 'react-redux';
import { transactionsSelector } from 'redux/selectors.store';

import s from './PageTransactions.module.scss';

import { createRowData } from 'data/transactions.data';
import { useLayout } from 'components/Layout/Layout';

import TableActions from './TableActions/TableActions';

const PageTransactions = () => {
  const transactionsState = useSelector(transactionsSelector);
  const [selectedTr, setSelectedTr] = useState(null);
  const layout = useLayout();

  function onRowClick(data) {
    setSelectedTr(selectedTr);
  }
  const tableSettings = {
    tableTitles: transactionsState?.tableTitles || [],
    tableData: transactionsState?.transactions || [],
    onRowClick,
    createRowData,
  };

  useEffect(() => {
    layout.handleSetFooterContent(<TableActions />);
    console.log('first');
    return () => {
      layout.handleSetFooterContent();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className={s.transactionsPage}>
        <TableList {...tableSettings} />
      </div>
    </>
  );
};

export default PageTransactions;
