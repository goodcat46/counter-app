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
    <div className={classNames} title={''} onClick={onClick}>
      <span className={s.innerNoWrap}>{contentTop[top?.nestedKey] || '---'}</span>
      <span className={s.innerNoWrap}>{contentBottom[bottom?.nestedKey] || '---'}</span>
    </div>
  );
};

export default CellNestedDbl;
