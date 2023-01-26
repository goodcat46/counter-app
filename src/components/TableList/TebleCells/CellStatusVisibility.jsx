import React from 'react';
import { useRow } from '../TableRows/RowContext';
import Status from './Status/Status';

import s from './TableCells.module.scss';
const CellStatusVisibility = ({ title, idx, className, onClick }) => {
  const { rowData } = useRow();
  const content = rowData[title?.action] || '---';
  const actionClassName = content !== '---' ? s[title?.action] : s.empty;
  const classNames = [s.coll, actionClassName, className].join(' ');

  return (
    <div className={classNames} onClick={onClick}>
      <Status status={rowData?.visibilityStatus ? 'visible' : 'hidden'} />
    </div>
  );
};

export default CellStatusVisibility;
