import React from 'react';
// import PropTypes from 'prop-types';
import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';

const CellTextDbl = ({ title, idx, className = '', onClick }) => {
  const { rowData } = useRow();
  const { top, bottom } = title;

  const contentTop = rowData[top?.dataKey] || '---';
  const contentBottom = rowData[bottom?.dataKey] || 'UAH';

  const actionClassName = s[title?.action] || s.empty;
  const classNames = [s.coll, actionClassName, ...className].join(' ');

  return (
    <div className={classNames} title={''} onClick={onClick}>
      <span className={s.cellInnerWrap}>{contentTop}</span>

      {contentBottom && <span className={s.cellInnerWrap}>{contentBottom || 'UAH'}</span>}
    </div>
  );
};

export default CellTextDbl;
