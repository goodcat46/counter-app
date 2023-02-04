import React from 'react';
// import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';

const CellTitle = ({ title, idx, className = '', onClick }) => {
  const classNames = [s.title, s[title?.action], ...className].join(' ');

  return (
    <div style={{ width: title?.width }} className={classNames} title={title?.title || 'Empty'} onClick={onClick}>
      <span> {title?.title || 'Empty'}</span>
      {title?.subTitle && <span> {title?.subTitle || 'Empty'}</span>}
    </div>
  );
};

export default CellTitle;
