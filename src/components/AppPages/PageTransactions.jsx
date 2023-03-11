import React, { useState } from 'react';
import TableList from 'components/TableList/TableList';
import { useSelector } from 'react-redux';
import { transactionsSelector } from 'redux/selectors.store';
import { transactionsColumns, transactionsSearchParams } from 'data';
import { createRowData } from 'data/transactions.data';
import TableActions from '../TableList/TableActions/TableActions';

import ModalContent from 'components/ModalContent/ModalContent';
import ModalDefault from 'components/ModalDefault/ModalDefault';
import styled from 'styled-components';
// import CreatingList from 'components/CreatingList/CreatingList';

const PageTransactions = () => {
  const transactionsState = useSelector(transactionsSelector);
  const [selectedTr, setSelectedTr] = useState(null);

  function onRowClick(data) {
    setSelectedTr(selectedTr);
  }
  const tableSettings = {
    // tableTitles: transactionsState?.tableTitles || [],
    tableTitles: transactionsColumns,
    tableSearchParams: transactionsSearchParams,
    tableData: transactionsState?.transactions || [],
    onRowClick,
    createRowData,
    TableActionsComp: TableActions,
  };

  // const trTypes = [
  //   { title: 'Доходи', value: 'INCOME' },
  //   { title: 'Перекази', value: 'TRANSFER' },
  //   { title: 'Витрати', value: 'EXPENSE' },
  // ];

  const countTypes = [
    { title: 'Актив', value: 'ACTIVE' },
    { title: 'Пасив', value: 'PASSIVE' },
  ];

  return (
    <>
      <Page>
        <TableList {...tableSettings} />

        <ModalContent isOpen>
          <ModalDefault filterOptions={countTypes}>{/* <CreatingList /> */}</ModalDefault>
        </ModalContent>
      </Page>
    </>
  );
};

const Page = styled.div`
  grid-column: 1/11;
  grid-row: 1/11;
`;

export default PageTransactions;
