import React from 'react';
// import TableRowIncome from './TableRows/TableRowIncome';
// import TableRowExpense from './TableRows/TableRowExpense';
// import TableRowTransfer from './TableRows/TableRowTransfer';
import TableRow from './TableRows/TableRow';
import { useTable } from './TableContext';

import s from './TableList.module.scss';

const TableBody = () => {
  const { tableData, prepeareRowData } = useTable();

  // const rowsMap = {
  //   income: TableRowIncome,
  //   expense: TableRowExpense,
  //   transfer: TableRowTransfer,
  // };

  return (
    <div className={s.tBody}>
      {tableData.map((rowData, idx) => {
        return <TableRow key={idx} {...{ rowData, idx, prepeareRowData }} />;
      })}
    </div>
  );
};

export default TableBody;
