import RowContext from './RowContext';
// import RowActions from './RowActions/RowActions';
import Cell from '../TebleCells/Cell';
import CellText from '../TebleCells/CellText';
// import CellActions from '../TebleCells/CellActions';
import CellCheckBox from '../TebleCells/CellCheckBox';
import { CellsMap } from '../TebleCells';
import { useState } from 'react';
import { useTable } from '../TableContext';

import s from './TableRow.module.scss';

const TableRow = props => {
  const { tableTitles = [], rowGrid } = useTable();
  const [isActionsOpen, setIsActionsOpen] = useState(false);

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

  return (
    <RowContext value={ctxValue}>
      <div className={s.row} data-row id={props?.rowData?._id || null}>
        <div className={s.rowStickyEl}>
          <CellCheckBox />
        </div>

        <div className={s.rowData} style={{ ...rowGrid }}>
          {tableTitles.map((item, idx) => {
            let CellComp = CellText;

            if (CellsMap[item.action]) {
              CellComp = CellsMap[item.action];

              return (
                <Cell key={idx} title={item} idx={idx}>
                  <CellComp title={item} idx={idx} />
                </Cell>
              );
            }

            CellComp = CellText;
            return (
              <Cell key={idx} title={item} idx={idx}>
                <CellComp title={item} idx={idx} />
              </Cell>
            );
          })}
        </div>
      </div>
      {/* <div className={s.rowContainer} >
      </div> */}
    </RowContext>
  );
};

export default TableRow;
