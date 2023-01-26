import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';

const CellActions = ({ title, idx, className = '' }) => {
  const { handleToggleActions } = useRow();
  const classNames = [s.actions, className].join(' ');

  return (
    <>
      <div className={classNames}>
        <ButtonIcon size="100%" iconSize="24px" iconId={'actions-h'} className={s.actionsBtn} onClick={handleToggleActions} />
      </div>
    </>
  );
};

export default CellActions;
