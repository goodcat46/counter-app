import React from 'react';
// import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';

const CellTitle = ({ title, idx, className = '', onClick = null }) => {
  const classNames = [s.title, s[title?.action], ...className].join(' ');

  return (
    <div style={{ width: title?.width }} className={classNames} onClick={onClick}>
      <span className={s.top}> {title?.title || 'Empty'}</span>

      {title?.subTitle && <span className={s.bottom}> {title?.subTitle || 'Empty'}</span>}
    </div>
  );
};

export default CellTitle;
