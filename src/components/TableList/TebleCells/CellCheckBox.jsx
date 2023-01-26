import React from 'react';
import { useRow } from '../TableRows/RowContext';
import CheckBox from './CheckBox/CheckBox';
import s from './TableCells.module.scss';
const CellCheckBox = ({ title, idx, className, onChange }) => {
  const { rowData } = useRow();
  const classNames = [s.checkboxColl, className].join(' ');
  return (
    <div className={classNames}>
      <CheckBox id={rowData._id} />
    </div>
  );
};

export default CellCheckBox;
