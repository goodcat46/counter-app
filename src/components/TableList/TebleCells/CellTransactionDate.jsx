import React from 'react';
import { useRow } from '../TableRows/RowContext';
import DateInfo from './Date/DateInfo';

import s from './TableCells.module.scss';

const CellTransactionDate = ({ title, className, onClick }) => {
  const { rowData } = useRow();

  const content = rowData[title?.dataKey];
  const actionClassName = content ? s[title?.action] : s.empty;
  const classNames = [s.coll, s.collDate, actionClassName, className].join(' ');

  return (
    <div className={classNames} onClick={onClick}>
      <DateInfo dateInfo={rowData?.transactionDate} />
    </div>
  );
};

export default CellTransactionDate;
