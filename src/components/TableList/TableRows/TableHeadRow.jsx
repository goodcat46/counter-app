import React from 'react';
import CellTitle from '../TebleCells/CellTitle';
import CellCheckBoxHead from '../TebleCells/CellCheckBoxHead';
// import CellActions from '../TebleCells/CellActions';
import { useTable } from '../TableContext';
import s from './TableRow.module.scss';
const TableHeadRow = () => {
  const { tableTitles = [], rowGrid, rowActions = true } = useTable();

  const styles = {
    ...rowGrid,
  };

  const CellsMap = {
    title: CellTitle,
    string: CellTitle,
    actions: CellTitle,
    checkbox: CellCheckBoxHead,
  };

  let Cell = CellTitle;
  return (
    <div style={styles} className={s.thRow}>
      {rowActions && (
        <div className={s.rowStickyEl}>
          <CellTitle title={{ title: 'Дії' }} />

          <CellCheckBoxHead />
        </div>
      )}

      {tableTitles.map((item, idx) => {
        if (CellsMap[item.action]) {
          Cell = CellsMap[item.action];

          return <Cell key={item.title} title={item} idx={idx} />;
        }
        Cell = CellsMap.title;
        return <Cell key={item.title} title={item} idx={idx} />;
      })}
    </div>
  );
};

export default TableHeadRow;
