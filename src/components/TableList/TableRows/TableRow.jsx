import RowContext from './RowContext';
import RowActions from './RowActions/RowActions';
import Cell from '../TebleCells/Cell';
import CellText from '../TebleCells/CellText';
import CellActions from '../TebleCells/CellActions';
import CellCheckBox from '../TebleCells/CellCheckBox';
import { CellsMap } from '../TebleCells';
import { useState } from 'react';
import { useTable } from '../TableContext';

import s from './TableRow.module.scss';

const TableRow = props => {
  const { tableTitles = [], rowGrid, rowActions = true, onRowClick, rowRef } = useTable();
  const [isActionsOpen, setIsActionsOpen] = useState(false);

  const styles = {
    ...rowGrid,
  };

  function handleOnRowClick(ev) {
    const { currentTarget } = ev;
    const { rowData } = props;
    onRowClick({ ev, data: rowData });

    if (!rowRef.current) {
      rowRef.current = currentTarget;
      rowRef.current.classList.add([s.selected]);
      return;
    }

    if (currentTarget !== rowRef.current) {
      rowRef.current.classList.remove([s.selected]);
      rowRef.current = currentTarget;
    }
    rowRef.current.classList.toggle([s.selected]);
  }
  function handleToggleActions(ev) {
    setIsActionsOpen(!isActionsOpen);
  }
  function handleCloseActions(ev) {
    setIsActionsOpen(false);
  }

  const ctxValue = {
    ...props,
    isActionsOpen,
    handleToggleActions,
    handleCloseActions,
  };

  // useEffect(() => {
  //   function CloseRowActions(ev) {
  //     const { target } = ev;

  //     if (!target.closest(`#row${props.idx}`)) {
  //       setIsActionsOpen(false);
  //       window.removeEventListener('click', CloseRowActions);
  //     }
  //   }
  //   window.addEventListener('click', CloseRowActions);
  //   return () => {
  //     window.removeEventListener('click', CloseRowActions);
  //   };
  // }, [isActionsOpen, props.idx]);
  return (
    <RowContext value={ctxValue}>
      <div className={s.rowContainer} id={`row${props.idx}`} {...{ onClick: onRowClick && handleOnRowClick }}>
        <RowActions />

        <div style={styles} className={s.row}>
          {rowActions && (
            <>
              <div className={[s.rowStickyEl, 'listRow'].join(' ')}>
                <CellActions />

                <CellCheckBox />
              </div>
            </>
          )}

          {tableTitles.map((item, idx) => {
            let CellComp = CellText;

            if (CellsMap[item.action]) {
              CellComp = CellsMap[item.action];

              return (
                <Cell key={item.dataKey} title={item} idx={idx}>
                  <CellComp title={item} idx={idx} />
                </Cell>
              );
            }

            CellComp = CellText;
            return (
              <Cell key={item.dataKey} title={item} idx={idx}>
                <CellComp title={item} idx={idx} />
              </Cell>
            );
          })}
        </div>
      </div>
    </RowContext>
  );
};

export default TableRow;
