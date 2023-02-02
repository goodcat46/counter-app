import React from 'react';
import TableCounts from 'components/TableCounts/TableCounts';

import s from './PageDirectories.module.scss';

const PageCounts = () => {
  return (
    <>
      <div className={s.PageDirectories}>
        <TableCounts />
      </div>
    </>
  );
};

export default PageCounts;
