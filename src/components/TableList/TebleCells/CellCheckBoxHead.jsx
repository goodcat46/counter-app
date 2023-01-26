import React from 'react';
// import { useRow } from '../TableRows/RowContext';
import CheckBoxHead from './CheckBoxHead/CheckBoxHead';

import s from './TableCells.module.scss';
const CellCheckBoxHead = ({ title, idx, className, onChange }) => {
  const classNames = [s.title, s.checkboxCollHead, className].join(' ');

  return (
    <div className={classNames}>
      <CheckBoxHead />
    </div>
  );
};

export default CellCheckBoxHead;
