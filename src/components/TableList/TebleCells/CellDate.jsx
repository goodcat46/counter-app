import React from 'react';
import { useRow } from '../TableRows/RowContext';
import DateInfo from './Date/DateInfo';

import s from './TableCells.module.scss';

const CellDate = ({ title, className, onClick }) => {
  const { rowData } = useRow();

  const content = rowData[title?.dataKey];
  const actionClassName = content ? s[title?.action] : s.empty;
  const classNames = [s.coll, s.collDate, actionClassName, className].join(' ');
  console.log(rowData[title?.dataKey]);
  return (
    <div className={classNames} onClick={onClick}>
      <DateInfo dateInfo={title?.dataKey && rowData[title?.dataKey]} />
    </div>
  );
};

export default CellDate;
