import React from 'react';
import CellTitle from '../TebleCells/CellTitle';
import CellCheckBoxHead from '../TebleCells/CellCheckBoxHead';
import { useTable } from '../TableContext';

import s from './TableRow.module.scss';
import './TableRow.theme.scss';

const TableHeadRow = () => {
  const { tableTitles = [], rowGrid } = useTable();

  return (
    <div className={[s.thRow, 'thRow'].join(' ')}>
      <div className={s.rowStickyEl}>
        <CellCheckBoxHead />
      </div>

      <div className={s.thRowData} style={{ ...rowGrid }}>
        {tableTitles.map((item, idx) => (
          <CellTitle key={idx} title={item} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default TableHeadRow;
