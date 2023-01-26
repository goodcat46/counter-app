import React from 'react';
import TableHeadRow from './TableRows/TableHeadRow';

import s from './TableList.module.scss';

const TableHead = () => {
  return (
    <div className={s.tHead}>
      <TableHeadRow />
    </div>
  );
};

export default TableHead;
