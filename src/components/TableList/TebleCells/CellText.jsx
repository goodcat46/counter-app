import React from 'react';
// import PropTypes from 'prop-types';
import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';

const CellText = ({ title, idx, className = '', onClick }) => {
  const { rowData } = useRow();

  const content = rowData[title?.dataKey] || '---';
  const actionClassName = content !== '---' ? s[title?.action] : s.empty;
  const classNames = [s.coll, actionClassName, ...className].join(' ');

  return (
    <div className={classNames} title={content} onClick={onClick}>
      <span className={s.cellInnerWrap}>{content}</span>
    </div>
  );
};

export default CellText;
