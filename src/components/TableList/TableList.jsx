import React from 'react';

import TableContext from './TableContext';
import TableHead from './TableHead';
import TableBody from './TableBody';
import AppLoader from 'components/AppLoader/AppLoader';

import s from './TableList.module.scss';
import QuickActions from './QuickActions/QuickActions';
import TableOverHead from './TableOverHead/TableOverHead';

const TableList = ({ tableData = [], isLoading = false, rowActions = null, TableActionsComp = () => {}, ...props }) => {
  const ctx = { tableData, isLoading, rowActions, ...props };

  return (
    <TableContext value={ctx}>
      <AppLoader isLoading={isLoading} />

      <div className={s.container}>
        <TableOverHead />
        {/* <div className={s.scroll}>
          <div className={s.table}>
            <TableHead />

            {tableData.length !== 0 && <TableBody />}
          </div>

          {tableData.length === 0 && (
            <div className={s.empty}>
              <div className={s.sticky}>Дані відсутні</div>
            </div>
          )}
        </div> */}
      </div>
      <QuickActions />
    </TableContext>
  );
};

export default TableList;
