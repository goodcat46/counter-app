import React from 'react';
import TableRow from './TableRows/TableRow';
import { useTable } from './TableContext';

import s from './TableList.module.scss';

const TableBody = () => {
  const { tableData, rowRef, onRowClick } = useTable();

  function handleOnRowClick(ev) {
    const { target } = ev;
    let rowEl;

    if (!target.closest('[data-row]')) {
      rowRef.current && rowRef.current.classList.remove([s.selected]);
      return;
    }
    rowEl = target.closest('[data-row]');

    if (onRowClick) {
      let rowData = tableData.find(el => el?._id === rowEl?.id);

      onRowClick({ ev, _id: rowEl?.id, data: rowData });
    }

    if (!rowRef.current) {
      rowRef.current = rowEl;
      rowRef.current.classList.add([s.selected]);
      return;
    }

    if (rowEl !== rowRef.current) {
      rowRef.current.classList.remove([s.selected]);
      rowRef.current = rowEl;
    }

    rowRef.current.classList.toggle([s.selected]);
  }

  return (
    <div className={s.tBody} onClick={handleOnRowClick}>
      {tableData.map((rowData, idx) => {
        return <TableRow key={idx} {...{ rowData, idx }} />;
      })}

      {/* <TableRow {...{ rowData: tableData[0] }} /> */}

      {/* {tableData.map((rowData, idx) => {
        return <TableRow key={idx} {...{ rowData, idx }} />;
      })}

      {tableData.map((rowData, idx) => {
        return <TableRow key={idx} {...{ rowData, idx }} />;
      })}

      {tableData.map((rowData, idx) => {
        return <TableRow key={idx} {...{ rowData, idx }} />;
      })}

      {tableData.map((rowData, idx) => {
        return <TableRow key={idx} {...{ rowData, idx }} />;
      })}

      {tableData.map((rowData, idx) => {
        return <TableRow key={idx} {...{ rowData, idx }} />;
      })}

      {tableData.map((rowData, idx) => {
        return <TableRow key={idx} {...{ rowData, idx }} />;
      })} */}
    </div>
  );
};

export default TableBody;
