import React, { useMemo, useState } from 'react';
// import PropTypes from 'prop-types';
import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';

const CellTextNested = ({ title, idx, className = '', onClick }) => {
  const { rowData = {} } = useRow();
  const [content, setContent] = useState('---');

  const actionClassName = content !== '---' ? s[title?.action] : s.empty;
  const classNames = [s.coll, actionClassName, className].join(' ');

  useMemo(() => {
    try {
      if (title?.nestedKey && rowData[title?.dataKey]) {
        setContent(rowData[title?.dataKey]);

        // console.log(title?.nestedKey, content);
        return;
      }
    } catch (error) {
      setContent('---');
    }
  }, [rowData, title?.dataKey, title?.nestedKey]);

  return (
    <div className={classNames} title={content} onClick={onClick}>
      <span className={s.cellInnerWrap}>{content[title?.nestedKey] || '---'}</span>
    </div>
  );
};

export default CellTextNested;
