import React from 'react';

import TableContext from './TableContext';
import TableHead from './TableHead';
import TableBody from './TableBody';
import AppLoader from 'components/AppLoader/AppLoader';

import s from './TableList.module.scss';

const TableList = ({ tableData = [], isLoading = false, rowActions = null, ...props }) => {
  const ctx = { tableData, isLoading, rowActions, ...props };

  return (
    <TableContext value={ctx}>
      <>
        <AppLoader isLoading={isLoading} />

        <div className={[s.table]}>
          <TableHead />

          {tableData.length > 0 && <TableBody />}
        </div>
      </>
    </TableContext>
  );
};

export default TableList;
