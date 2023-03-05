import React from 'react';
// import PropTypes from 'prop-types';
import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';

const CellNestedDbl = ({ title, idx, className = '', onClick }) => {
  const { rowData } = useRow();
  const { titles = {}, action = '' } = title;
  const { top = {}, bottom = {} } = titles;

  const contentTop = rowData[top?.dataKey] ? rowData[top?.dataKey] : '---';
  const contentBottom = rowData[bottom?.dataKey] ? rowData[bottom?.dataKey] : '---';

  const classNames = [s.coll, s[action], className].join(' ');

  return (
    <div className={classNames} title={null} onClick={onClick}>
      <span className={[s.innerNoWrap, s.top].join(' ')}>{contentTop[top?.nestedKey] || '---'}</span>

      <span className={[s.innerNoWrap, s.bottom].join(' ')}>{contentBottom[bottom?.nestedKey] || '---'}</span>
    </div>
  );
};

export default CellNestedDbl;
