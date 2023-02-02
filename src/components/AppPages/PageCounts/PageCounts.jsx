import React from 'react';

import s from './PageCounts.module.scss';
import TableCounts from 'components/TableCounts/TableCounts';

const PageCounts = () => {
  return (
    <>
      <div className={s.transactionsPage}>
        <TableCounts />
      </div>
    </>
  );
};

export default PageCounts;
