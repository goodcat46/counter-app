import TableCounts from 'components/TableCounts/TableCounts';
import React from 'react';

import s from './ModalTableCounts.module.scss';

const ModalTableCounts = () => {
  return (
    <div className={[s.table, 'theme'].join(' ')}>
      <header className={s.header}>
        <span>Рахунки</span>
      </header>
      <TableCounts />
    </div>
  );
};

export default ModalTableCounts;
