import React from 'react';
// import PropTypes from 'prop-types';
// import { useRow } from '../TableRows/RowContext';

// import s from './TableCells.module.scss';

const Cell = ({ title, idx, children, className = '', onClick }) => {
  // const { rowData } = useRow();

  const classNames = [...className].join(' ');

  return (
    <div style={{ width: title?.width, height: '100%' }} className={classNames} onClick={onClick}>
      {children}
    </div>
  );
};

export default Cell;
