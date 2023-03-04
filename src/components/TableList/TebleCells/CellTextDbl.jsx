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
    <div className={classNames} title={null} onClick={onClick}>
      <span className={[s.cellInnerWrap, s.top].join(' ')}>{contentTop}</span>

      {contentBottom && <span className={[s.cellInnerWrap, s.bottom].join(' ')}>{contentBottom || 'UAH'}</span>}
    </div>
  );
};

export default CellTextDbl;
