import React from 'react';
import s from './TableOverHead.module.scss';
import TableFilter from '../TableFilter/TableFilter';

const TableOverHead = () => {
  return (
    <div className={s.TableOverHead}>
      <TableFilter />
    </div>
  );
};

export default TableOverHead;
