import RowContext from './RowContext';
import RowActions from './RowActions/RowActions';
import Cell from '../TebleCells/Cell';
import CellText from '../TebleCells/CellText';
import CellActions from '../TebleCells/CellActions';
import CellCheckBox from '../TebleCells/CellCheckBox';
import { CellsMap } from '../TebleCells';
import { useState, useEffect } from 'react';
import { useTable } from '../TableContext';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAppPageSettings } from 'redux/selectors';

import s from './TableRow.module.scss';

const TableRowIncome = props => {
  const { tableTitles = [], rowGrid, rowActions = true } = useTable();
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const { indexPage } = useSelector(getAppPageSettings);
  const navigate = useNavigate();

  const styles = {
    ...rowGrid,
  };

  function handleOnRowClick(ev) {
    const { rowData } = props;
    if (rowData?._id) {
      console.log(rowData);
      navigate(`/${indexPage}/${rowData?._id}`);
    }
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

  useEffect(() => {
    function CloseRowActions(ev) {
      const { target } = ev;

      if (!target.closest(`#row${props.idx}`)) {
        setIsActionsOpen(false);
        window.removeEventListener('click', CloseRowActions);
      }
    }
    window.addEventListener('click', CloseRowActions);
    return () => {
      window.removeEventListener('click', CloseRowActions);
    };
  }, [isActionsOpen, props.idx]);
  return (
    <RowContext value={ctxValue}>
      <div className={s.rowContainer} id={`row${props.idx}`}>
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
                  <CellComp title={item} idx={idx} onClick={handleOnRowClick} />
                </Cell>
              );
            }

            CellComp = CellText;
            return (
              <Cell key={item.dataKey} title={item} idx={idx}>
                <CellComp title={item} idx={idx} onClick={handleOnRowClick} />
              </Cell>
            );
          })}
        </div>
      </div>
    </RowContext>
  );
};

export default TableRowIncome;
