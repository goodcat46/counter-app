import React, { useEffect, useState } from 'react';
import { useTable } from './TableContext';
import s from './TableList.module.scss';

const TableFooter = () => {
  const { selectedRows = [] } = useTable();

  const [rowsAmountSum, setRowsAmountSum] = useState(0);

  useEffect(() => {
    const countedSum = selectedRows.reduce(
      (acc, { amount, type }) => (type !== 'TRANSFER' ? acc + amount : acc + 0),
      0
    );

    setRowsAmountSum(countedSum);
  }, [selectedRows.length, selectedRows, rowsAmountSum]);

  return (
    <div className={s.tFooter}>
      <div className={s.wrapper}>
        <span>Обрано:</span>
        <span>{selectedRows?.length}</span>
      </div>

      <div className={s.wrapper}>
        <span>Сума:</span>
        <span>{rowsAmountSum}</span>
      </div>
    </div>
  );
};

export default TableFooter;
